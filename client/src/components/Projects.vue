<template>
  <Panel title="Projects">
    <div class="project mt-2" v-for="project in projects" :key="project.id">
      <v-layout>
        <v-flex xs9 class="text-xs-left">
          <span v-if="!project.isEditMode">
            {{ project.title }}
          </span>
          <v-text-field
            autofocus
            @keyup.enter="saveProject(project)"
            @input="setProjectTitle({ project, title: $event })"
            v-if="project.isEditMode"
            :value="project.title"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            class="icon"
            v-if="!project.isEditMode"
            @click="setEditMode(project)"
            >edit</v-icon
          >
          <v-icon
            class="icon"
            v-if="project.isEditMode"
            @click="saveProject(project)"
            >check</v-icon
          >
          <v-icon
            class="icon"
            v-if="!project.isEditMode"
            @click="deleteProject(project)"
          >
            delete</v-icon
          >
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8>
        <v-text-field
          placeholder="My Project Name..."
          @input="setNewProjectName"
          :value="newProjectName"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn class="mt-3" dark color="green" @click="createProject">
          <v-icon class="mr-2">add_circle</v-icon>
          Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Panel from "./Panel";

export default {
  mounted() {
    this.fetchProjects();
  },
  components: {
    Panel,
  },
  computed: {
    ...mapState("projects", ["newProjectName", "projects"]),
  },
  methods: {
    ...mapMutations("projects", [
      "setNewProjectName",
      "setEditMode",
      "unsetEditMode",
      "setProjectTitle",
    ]),
    ...mapActions("projects", [
      "createProject",
      "fetchProjects",
      "saveProject",
      "deleteProject",
    ]),
  },
};
</script>

<style>
.icon {
  cursor: pointer;
}

.icon:hover {
  color: #333;
}

.project {
  font-size: 24px;
}
</style>
