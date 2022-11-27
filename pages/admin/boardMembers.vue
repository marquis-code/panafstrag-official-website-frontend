<template>
  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-0">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="bg-white p-8 lg:col-span-3 lg:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <h1 class="text-center text-3xl font-medium">
              Create Board Member
            </h1>
            <div
              class="flex justify-center items-center flex-col space-y-2 pb-5"
            >
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
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
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
                <input
                  class="
                    w-full
                    rounded-lg
                    border-none
                    outline-none
                    ring-1 ring-gray-300
                    p-3
                    text-sm
                  "
                  placeholder="Enter date joined"
                  type="date"
                  id="date"
                  v-model="form.dateJoined"
                />
              </div>
              <div>
                <label class="sr-only" for="position">Position</label>
                <input
                  class="
                    w-full
                    rounded-lg
                    border-none
                    outline-none
                    ring-1 ring-gray-300
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
                  class="
                    w-full
                    rounded-lg
                    border-none
                    outline-none
                    ring-1 ring-gray-300
                    p-3
                    text-sm
                  "
                  placeholder="Enter Email address"
                  type="email"
                  id="email"
                  v-model="form.email"
                />
              </div>

              <div>
                <label class="sr-only" for="university">University</label>
                <input
                  class="
                    w-full
                    rounded-lg
                    border-none
                    outline-none
                    ring-1 ring-gray-300
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
                    border-none
                    outline-none
                    ring-1 ring-gray-300
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
                    border-none
                    outline-none
                    ring-1 ring-gray-300
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
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  text-sm
                "
                placeholder="Enter board memeber bio"
                rows="8"
                id="bio"
                v-model="form.bio"
              ></textarea>
            </div>

            <div class="mt-5">
              <button
                type="submit"
                class="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-black
                  px-5
                  py-3
                  text-white
                "
              >
                <span class="font-medium"> Proceed </span>

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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "boardMembers",
  data() {
    return {
      uploadingFile: false,
      uploadingProfile: false,
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
      processing: false,
    };
  },
  methods: {
    async handleProfileUpload(e) {
      this.form.avatar = e.target.files[0];
      this.profilePreview = URL.createObjectURL(this.form.avatar);
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
      this.profilePreview = null
      this.form.dateJoined = null;
    },
    async handleSubmit() {
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

        const response = await this.$axios.post(
          `https://panafrica-website.herokuapp.com/api/panAfrica/board-member`,
          formData
        );
        this.resetForm();
        // console.log(response);
      } catch (error) {
        this.$toast.warning(
          "An error occured while uploading your file, please try again"
        );
      } finally {
        // this.uploadingFile = false;
      }
    },
  },
};
</script>

<style>
</style>
