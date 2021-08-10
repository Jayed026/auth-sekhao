<template>
  <div>
    <button @click="getPosts()">Load Post</button>
    <br />

    <table border="1px">
      <tr>
        <th>D.O.F</th>
        <th>Gender</th>
        <th>Pr.add</th>
        <th>pr. add</th>
        <th>NID</th>
        <th>about</th>
        <th>Qualification</th>
        <th>SSC year</th>
        <th>SSC institute</th>
        <th>SSC group</th>
        <th>SSC CGPA</th>
        <th>HSC year</th>
        <th>HSC institute</th>
        <th>HSC group</th>
        <th>HSC CGPA</th>
        <th>Varsity</th>
        <th>Subject</th>
        <th>CGPA</th>
        <th>Area coverd</th>
        <th>Expected Salery</th>
        <th>current status</th>
        <th>Days per week</th>
        <th>tutoring style</th>
        <th>tutoring place</th>
        <th>tutoring approach</th>
        <th>preferred medium</th>
        <th>preferred classes</th>
        <th>preferred Subject</th>
        <th>shift</th>
        <th>preferred area</th>
        <th>tution experience</th>
        <th>student info</th>
        <th>student institute</th>
        <th>student group</th>
        <th>student version</th>
        <th>bio</th>
        <th>_id</th>
        <th>UserRole_ID</th>
        <th>UserRoleID</th>
        <th>U_Name</th>
        <th>U_description</th>
        <th>U_v_</th>
        <th>usertype</th>
        <th>fullname</th>
        <th>username</th>
        <th>email</th>
        <th>password</th>
        <th>confirm password</th>
        <th>phone</th>
        <th>Alternate phone</th>
        <th>__v</th>
      </tr>

      <tr v-for="post in posts" v-bind:key="post.id">
        <td>{{ post.dateofbirth }}</td>
        <td>{{ post.gender }}</td>
        <td>{{ post.presentadd }}</td>
        <td>{{ post.permanentadd }}</td>
        <td>{{ post.nid }}</td>
        <td>{{ post.about }}</td>
        <td>{{ post.qualification }}</td>
        <td>{{ post.sscyear }}</td>
        <td>{{ post.sscinstitute }}</td>
        <td>{{ post.sscgroup }}</td>
        <td>{{ post.sscgpa }}</td>
        <td>{{ post.hscyear }}</td>
        <td>{{ post.hscinstitute }}</td>
        <td>{{ post.hscgroup }}</td>
        <td>{{ post.hscgpa }}</td>
        <td>{{ post.varsity }}</td>
        <td>{{ post.subject }}</td>
        <td>{{ post.cgpa }}</td>
        <td>{{ post.areacovered }}</td>
        <td>{{ post.expectedsalary }}</td>
        <td>{{ post.currentstatus }}</td>
        <td>{{ post.daysperweek }}</td>
        <td>{{ post.tutoringstyle }}</td>
        <td>{{ post.tutoringplace }}</td>
        <td>{{ post.tutoringapproach }}</td>
        <td>{{ post.preferredmedium }}</td>
        <td>{{ post.preferredclasses }}</td>
        <td>{{ post.preferredsubjects }}</td>
        <td>{{ post.shift }}</td>
        <td>{{ post.preferredarea }}</td>
        <td>{{ post.tutionexperience }}</td>
        <td>{{ post.studentinfo }}</td>
        <td>{{ post.studentinstitute }}</td>
        <td>{{ post.studentgroup }}</td>
        <td>{{ post.studentversion }}</td>
        <td>{{ post.bio }}</td>
        <td>{{ post._id }}</td>
        <td>{{ post.userrole._id }}</td>
        <td>{{ post.userrole.id }}</td>
        <td>{{ post.userrole.name }}</td>
        <td>{{ post.userrole.description }}</td>
        <td>{{ post.userrole.__v }}</td>
        <td>{{ post.usertype }}</td>
        <td>{{ post.fullname }}</td>
        <td>{{ post.username }}</td>
        <td>{{ post.email }}</td>
        <td>{{ post.password }}</td>
        <td>{{ post.confirmpassword }}</td>
        <td>{{ post.phone }}</td>
        <td>{{ post.alternatephone }}</td>
        <td>{{ post.__v }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentlist",
  data() {
    return {
      posts: undefined,
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://shekhao.herokuapp.com/studentslist")
        .then((response) => {
          console.log("work");
          // console.log(response.posts.fullname);
          console.log("abcd", response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log("works2");
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
