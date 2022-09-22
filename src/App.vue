<template>
  <div class="grid grid-cols-7 gap-6 py-6 px-4">

    <div class="col-span-2">
        <list-collab-spaces />
        <create-collab-space />
        <add-members-attach-file />
    </div>

    <div class="col-span-5">
        <toolbar-collab-space />
        <settings-collab-space />
        <add-collage-space-member />
        <LicensesResume/>
    </div>
  </div>
</template>

<script>
  import ListCollabSpaces from './components/ListCollabSpaces'
  import CreateCollabSpace from './components/CreateCollabSpace'
  import AddMembersAttachFile from './components/AddMembersAttachFile'
  import ToolbarCollabSpace from './components/ToolbarCollabSpace'
  import SettingsCollabSpace from './components/SettingsCollabSpace'
  import AddCollageSpaceMember from './components/AddCollageSpaceMember'
  import LicensesResume from './components/LicensesResume.vue'

  export default {
      components: {
          ListCollabSpaces,
          CreateCollabSpace,
          AddMembersAttachFile,
          ToolbarCollabSpace,
          SettingsCollabSpace,
          AddCollageSpaceMember,
          LicensesResume
      },
  }
</script>

<style>
  @import './assets/tailwind.css';  
</style>
