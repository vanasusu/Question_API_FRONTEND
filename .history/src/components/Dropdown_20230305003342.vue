<template>
  <div class="flex flex-wrap">
    <div class="w-full  px-4">
      <div class="relative inline-flex align-middle w-full">
        <p  class="px-3 cursor-pointer py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" v-on:click="toggleDropdown()" ref="btnDropdownRef">
          Hi, {{user.username}}
        </p>
        <div v-bind:class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
          
          <div v-on:click="logout" class="text-sm py-2 cursor-pointer px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-slate-700">
            Logout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { createPopper } from "@popperjs/core";

export default {
  name: "Dropdown",
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  props:['user'],
  methods: {
    logout:function(){
      
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    },
    toggleDropdown: function(){
      if(this.dropdownPopoverShow){
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
}
</script>