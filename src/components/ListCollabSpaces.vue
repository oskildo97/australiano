<template>
    <div>
        <p class="text-xl font-bold text-iris-blue">Collab space settings</p>
        <div class="my-4">
            <span class="border border-iris-blue text-iris-blue text-sm font-medium px-9 py-1.5 rounded">
                5 Spaces
            </span>
        </div>

        <!-- <div class="divide-y divide-slate-300"></div> -->


                <!-- lista desordenada  -->
        <ul class="space-y-3" >
            <li>

                    <!-- para utilizar flex se debe crear la clase flex a la etiqueta padre  -->
                <a href="" class="flex items-center p-3 text-base font-bold text-iris-blue bg-iris-blue bg-opacity-10 rounded-lg hover:bg-opacity-20 group hover:shadow space-x-3">
                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">

                    <div class="flex flex-wrap content-start space-y-0.5 font-medium text-left text-xl">
                        <div class="">TLC</div>
                        <div class="self-end text-sm text-iris-blue">
                            5 Members
                            &#8226;
                            3 Admins
                            &#8226;
                            52 Licenses
                        </div>
                    </div>

                    <button type="button" class="flex-1 place-self-end pl-3 text-iris-blue bg-iris-white hover:bg-iris-blue 
                                                hover:text-white focus:ring-4 focus:outline-none focus:iris-white-1
                                                font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Icon description</span>
                    </button>


                </a>  
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        // props: ['totalTeams', 'totalUsers'],
        components: {
        }
    }

</script>

<style>
    @import '../assets/tailwind.css';  
  </style>