<template>
  <Transition name="fade">
    <section class="">
      <b-container>
        <button
          @click="goBack()"
          class="outline-none mt-2 border bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#747070"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          >
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h2 class="text-xl my-6 font-medium text-black">Update board member</h2>

        <!-- <div class="flex justify-center items-center border-2 border-red-500"> -->
        <div
          class="md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border lg:mt-4 mb-6 p-3 pb-6 lg:p-6"
        >
          <form @submit.prevent="handleSubmit" class="space-y-7">
            <!-- <h1 class="text-center text-gray-500 text-xl font-medium">
              Edit board member
            </h1> -->
            <div
              class="flex justify-center items-center flex-col space-y-2 pb-3"
            >
              <img
                v-if="form.avatar && !profilePreview"
                class="h-14 w-14 rounded-full object-cover"
                :src="form.avatar"
              />

              <img
                v-if="profilePreview"
                class="h-14 w-14 rounded-full object-cover"
                :src="profilePreview"
              />
              <spinner v-if="uploadingProfile"></spinner>
              <input
                @change="handleProfileUpload"
                class="hidden"
                type="file"
                id="profile"
              />
              <label
                for="profile"
                class="text-indigo-700 text-sm font-medium cursor-pointer"
                :class="[
                  uploadingProfile ? 'opacity-25 cursor-not-allowed' : '',
                ]"
                >{{
                  uploadingProfile ? "Uploading..." : "Click to upload image"
                }}</label
              >
            </div>

            <div>
              <label class="sr-only" for="name">Name</label>
              <input
                class="w-full rounded-lg border outline-none p-3 text-sm"
                placeholder="Enter Full Name"
                type="text"
                id="name"
                v-model="form.name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="date">Date Joined</label>
                <client-only
                  ><date-picker
                    class="w-full rounded-lg border outline-none p-3 text-sm"
                    placeholder="Select Date"
                    v-model="form.dateJoined"
                /></client-only>
              </div>
              <div>
                <label class="sr-only" for="position">Position</label>
                <input
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Enter Member Position"
                  type="position"
                  id="position"
                  v-model="form.position"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Enter Email address"
                  type="email"
                  id="email"
                  v-model="form.email"
                />
              </div>

              <div>
                <label class="sr-only" for="university">University</label>
                <input
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Enter University"
                  type="text"
                  id="university"
                  v-model="form.university"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="department">Department</label>
                <input
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Enter Department"
                  type="text"
                  id="department"
                  v-model="form.department"
                />
              </div>

              <div>
                <label class="sr-only" for="faculty">Faculty</label>
                <input
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Enter Faculty"
                  type="text"
                  id="faculty"
                  v-model="form.faculty"
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="bio">Board Member Bio</label>
              <textarea
                class="w-full rounded-lg border outline-none p-3 text-sm"
                placeholder="Enter board memeber bio"
                rows="8"
                id="bio"
                v-model="form.bio"
              ></textarea>
            </div>

            <div class="mt-3 flex justify-end items-center">
              <button
                :disabled="loading"
                type="submit"
                :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
                class="inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 w-full md:w-3/12 text-white"
              >
                <span class="font-medium">
                  {{ loading ? "processing..." : "Continue" }}</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <!-- </div> -->
      </b-container>
    </section>
  </Transition>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  name: "boardMembers",
  layout: "admin",
  data() {
    return {
      uploadingFile: false,
      uploadingProfile: false,
      member: {},
      date_today: new Date(),
      profilePreview: "",
      form: {
        name: "",
        email: "",
        university: "",
        department: "",
        faculty: "",
        position: "",
        bio: "",
        dateJoined: "",
        avatar: "",
      },
      loading: false,
    };
  },
  created() {
    this.fetchMember();
  },
  methods: {
    async handleProfileUpload(e) {
      this.form.avatar = e.target.files[0];
      this.profilePreview = URL.createObjectURL(this.form.avatar);
    },
    goBack() {
      this.$router.go(-1);
    },
    async handleSubmit() {
      this.loading = true;
      try {
        const formData = new FormData();
        formData.append("image", this.form.avatar);
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("university", this.form.university);
        formData.append("department", this.form.department);
        formData.append("faculty", this.form.faculty);
        formData.append("position", this.form.position);
        formData.append("bio", this.form.bio);
        formData.append("dateJoined", this.form.dateJoined);

        await this.$axios.put(
          `https://panafstrag.onrender.com/api/panAfrica/board-member/${this.$route.params.id}`,
          formData
        );
        this.$toast
          .success("Board member was successfully updated")
          .goAway(1500);
        this.$router.push("/admin/board-members");
        this.loading = false;
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
        this.loading = false;
      }
    },
    async fetchMember() {
      this.loading = true;
      try {
        let response = await this.$axios.get(
          `https://panafstrag.onrender.com/api/panAfrica/board-member/${this.$route.params.id}`
        );
        this.form = response.data;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-leave-to {
  transform: scale(0.8);
}
</style>
