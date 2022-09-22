<template>
    <div class="bg-white border border-iris-grey-border rounded-md mt-2">
        <div class="grid grid-cols-8">
            <div class="col-span-2">
                <h1>Add collab space member</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, ad
                </p>
            </div>
            <div class="col-span-6">
                <div class="grid grid-cols-1">
                    <div class="flex p-3 text-base font-bold text-iris-blue bg-iris-blue bg-opacity-10 rounded-lg hover:bg-opacity-20 group hover:shadow space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                        <div class="flex-auto space-y-0.5 font-medium text-left text-xl">
                            <div>TLC</div>
                        </div>
                        <button class="bg-iris-blue hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
                            <span class="text-iris-green">
                                Save changes
                            </span>                    
                        </button>
                    </div>  

                    <div class="flex items-center p-3 text-base font-bold text-iris-blue bg-iris-blue bg-opacity-10 rounded-lg hover:bg-opacity-20 group hover:shadow space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                        <div class="flex-auto space-y-0.5 font-medium text-left text-xl">
                            <div>TLC</div>
                        </div>
                        <button class="bg-iris-blue hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
                            <span class="text-iris-green">
                                Save changes
                            </span>                    
                        </button>
                    </div>
                </div>

                <!-- <div class="flex flex-col divide-y">
                    <div>
                        <p>jkdkjasd asdasd asdas dasd asda sd asd </p>
                        <form>   
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p>members (56)</p>
                        <div class="grid grid-cols-1">
                            <div class="flex flex-wrap gap-4 my-4 mx-2">
                                <div class="pl-2">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Team Image">
                                </div>
                                <div class="flex-auto">
                                    <div>Collab space owner(TLC)</div>
                                    <div class="text-gray-700 text-sm">Juan Steban </div>
                                </div>
                                <div class="">
                                    <button class="bg-iris-blue hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
                                        <span class="text-iris-green">
                                            Save changes
                                        </span>                    
                                    </button>
                                </div>
                                <div class="">
                                    <div class="flex flex-col">
                                        <button type="button" class="h-8 w-8 text-white bg-iris-light-red hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8706 9.29602C12.8706 9.23134 12.9353 9.23134 12.8706 9.29602V9.16667L11.5771 2.31095C11.3831 1.27612 10.4776 0.5 9.37811 0.5H3.55721C2.45771 0.5 1.55224 1.27612 1.35821 2.31095L0.58209 6.3209C0.517413 6.64428 0.776119 7.03234 1.0995 7.09701C1.42289 7.16169 1.81095 6.90298 1.87562 6.5796L2.65174 2.56965C2.71642 2.11692 3.10448 1.79353 3.55721 1.79353H9.37811C9.83085 1.79353 10.2189 2.11692 10.2836 2.56965L11.1891 7.48507C10.995 7.4204 10.801 7.4204 10.6716 7.4204H2.26368C1.03483 7.4204 0 8.39055 0 9.68408V11.301C0 12.4652 0.970149 13.4353 2.26368 13.4353H10.7363C11.9652 13.4353 13 12.4652 13 11.1716V9.55473C12.9353 9.49005 12.9353 9.3607 12.8706 9.29602ZM11.6418 11.1716C11.6418 11.6891 11.1891 12.1418 10.6716 12.1418H2.26368C1.74627 12.1418 1.29353 11.6891 1.29353 11.1716V9.55473C1.29353 9.03731 1.74627 8.58458 2.26368 8.58458H10.7363C11.1891 8.58458 11.5771 8.90796 11.6418 9.3607C11.6418 9.42537 11.6418 9.49005 11.6418 9.55473V11.1716Z" fill="white"/>
                                                <path d="M3.81581 10.0073H2.78098C2.39292 10.0073 2.13422 10.266 2.13422 10.6541C2.13422 11.0422 2.39292 11.3009 2.78098 11.3009H3.81581C4.20387 11.3009 4.46257 11.0422 4.46257 10.6541C4.46257 10.266 4.20387 10.0073 3.81581 10.0073Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    -->
            </div>
        </div>
    </div>
</template>