<template>
  <b-container>
    <button
      @click="goBack()"
      class="
        outline-none
        mt-2
        border
        bg-gray-200
        text-black
        px-3
        py-1
        rounded-md
        text-sm
      "
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
    <!-- <h2 class="text-xl my-6 font-medium text-black">Create board member</h2> -->
    <div
      class="
        md:bg-white md:p-7 md:w-9/12
        shadow-md
        rounded-md
        border
        mt-4
        mb-6
        p-6
        border-2 border-red-500
      "
    >
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- <h1 class="text-center text-2xl md:text-3xl font-medium">
            Create Board Member
          </h1> -->
        <div class="flex justify-center items-center flex-col space-y-2">
          <img
            v-if="profilePreview && !uploadingProfile"
            class="h-14 w-14 rounded-full object-cover"
            :src="profilePreview"
          />
          <spinner v-if="uploadingProfile"></spinner>
          <img
            v-if="!profilePreview && !uploadingProfile"
            class="h-16 w-16"
            src="@/static/images/userIcon.svg"
          />
          <input
            @change="handleProfileUpload"
            class="hidden"
            type="file"
            id="profile"
          />
          <label
            for="profile"
            class="text-indigo-700 text-sm font-medium cursor-pointer"
            :class="[uploadingProfile ? 'opacity-25 cursor-not-allowed' : '']"
            >{{
              uploadingProfile ? "Uploading..." : "Click to upload image"
            }}</label
          >
        </div>
        <div>
          <label class="sr-only" for="name">Name</label>
          <input
            class="
              w-full
              rounded-lg
             border
              outline-none
              p-3
              text-sm
            "
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
                class="
                  w-full
                  rounded-lg
                  border
                  outline-none
                  p-3
                  text-sm
                "
                placeholder="Select Date"
                v-model="form.dateJoined"
            /></client-only>
          </div>
          <div>
            <label class="sr-only" for="position">Position</label>
            <input
              class="
                w-full
                rounded-lg
                    border
                outline-none
                p-3
                text-sm
              "
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
              @keyup="handleUserEmails"
              class="
                w-full
                rounded-lg
                     border
                outline-none
                p-3
                text-sm
              "
              placeholder="Enter Email address"
              type="email"
              id="email"
              v-model="form.email"
            />
            <div class="flex items-center flex-wrap">
              <span
                class="
                  text-xs text-gray-600
                  opacity-50
                  bg-gray-200
                  rounded-full
                  py-1
                  mr-1
                  my-2
                  px-2
                  text-center
                "
                v-for="(userEmail, index) in form.emails"
                :key="index"
                >{{ userEmail }}</span
              >
            </div>
          </div>

          <div>
            <label class="sr-only" for="university">University</label>
            <input
              class="
                w-full
                rounded-lg
                     border
                outline-none
                p-3
                text-sm
              "
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
              class="
                w-full
                rounded-lg
                   border
                outline-none
                p-3
                text-sm
              "
              placeholder="Enter Department"
              type="text"
              id="department"
              v-model="form.department"
            />
          </div>

          <div>
            <label class="sr-only" for="faculty">Faculty</label>
            <input
              class="
                w-full
                rounded-lg
                     border
                outline-none
                p-3
                text-sm
              "
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
            class="
              w-full
              rounded-lg
                border
              outline-none
              p-3
              text-sm
            "
            placeholder="Enter board memeber bio"
            rows="8"
            id="bio"
            v-model="form.bio"
          ></textarea>
        </div>

        <div class="mt-3 flex justify-end items-end">
          <button
            :disabled="loading"
            type="submit"
            :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
            class="
              w-full
              md:w-3/12
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-black
              px-3
              py-2
              text-white
            "
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
  </b-container>
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
        emails: [],
      },
      loading: false,
    };
  },
  methods: {
    async handleProfileUpload(e) {
      this.form.avatar = e.target.files[0];
      this.profilePreview = URL.createObjectURL(this.form.avatar);
    },
    goBack() {
      this.$router.go(-1);
    },
    handleUserEmails(event) {
      if (event.key === "," && this.form.email.split(",")[0]) {
        if (!this.form.emails.includes(this.form.email.split(",")[0])) {
          let modifiedMail = this.form.email.split(",")[0];
          this.form.emails.push(modifiedMail);
        }
        this.form.email = null;
      }
    },
    resetForm() {
      this.form.avatar = null;
      this.form.name = null;
      this.form.email = null;
      this.form.university = null;
      this.form.department = null;
      this.form.faculty = null;
      this.form.position = null;
      this.form.bio = null;
      this.profilePreview = null;
      this.form.dateJoined = null;
      this.form.emails = null;
    },
    async handleSubmit() {
      this.loading = true;
      if (!this.form.avatar) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Upload an image",
        });
        this.loading = false;
        return;
      }
      try {
        const formData = new FormData();
        formData.append("image", this.form.avatar);
        formData.append("name", this.form.name);
        formData.append("email", this.form.emails);
        formData.append("university", this.form.university);
        formData.append("department", this.form.department);
        formData.append("faculty", this.form.faculty);
        formData.append("position", this.form.position);
        formData.append("bio", this.form.bio);
        formData.append("dateJoined", this.form.dateJoined);

        await this.$axios.post(
          `https://panafstrag.onrender.com/api/panAfrica/board-member`,
          formData
        );
        this.resetForm();
        this.$toast
          .success("New board member was successfully created")
          .goAway(1500);
        this.loading = false;
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>
