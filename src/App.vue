<template>
    <div class="ml-4">
        <!-- <h2 class="font-semibold text-xl text-iris-dark-blue-1 leading-tight">
            Collab space Settings
        </h2> -->

        <div>
            <div class="grid grid-cols-7 gap-6 py-6 px-4">

                <div class="col-span-2">
                    <div class="flex flex-col gap-4">
                        <list-collab-spaces />
                        <create-collab-space />                       
                        <add-members-attach-file />     
                    </div>              
                </div>

                <div class="col-span-5">
                    <toolbar-collab-space />
                    <settings-collab-space />
                    <add-collab-space-member />
                    <licenses-resume/>
                    <signup-settings/>
                    <add-terms-collab-space/>
                </div>

                <!-- <update-team-name-form :team="team" :permissions="permissions" /> -->

                <!-- <team-member-manager class="mt-10 sm:mt-0"
                            :team="team"
                            :available-roles="availableRoles"
                            :user-permissions="permissions" />

                <template v-if="permissions.canDeleteTeam && ! team.personal_team">
                    <jet-section-border />

                    <delete-team-form class="mt-10 sm:mt-0" :team="team" />
                </template> -->
            </div>
        </div>
    </div>
</template>

<script>
    import ListCollabSpaces from './components/ListCollabSpaces'
    import CreateCollabSpace from './components/CreateCollabSpace'
    import AddMembersAttachFile from './components/AddMembersAttachFile'
    import ToolbarCollabSpace from './components/ToolbarCollabSpace'
    import SettingsCollabSpace from './components/SettingsCollabSpace'
    import AddCollabSpaceMember from './components/AddCollabSpaceMember'
    import LicensesResume from './components/LicensesResume'
    import SignupSettings from './components/SignupSettings'
    import AddTermsCollabSpace from './components/AddTermsCollabSpace'

    export default {
        // props: [
        //     'totalTeams',
        //     'totalUsers',
        //     'userName',

        //     'team',
        //     'availableRoles',
        //     'permissions',
        // ],

        components: {
            ListCollabSpaces,
            CreateCollabSpace,
            AddMembersAttachFile,
            ToolbarCollabSpace,
            SettingsCollabSpace,
            AddCollabSpaceMember,
            LicensesResume,
            SignupSettings,
            AddTermsCollabSpace
        },
    }
</script>


<style>
  @import './assets/tailwind.css';  
</style>