
import ls from '$lib/stores/localStore';
import Box from 'carbon-icons-svelte/lib/Box.svelte';
import ConnectionSend from 'carbon-icons-svelte/lib/ConnectionSend.svelte';
import ConnectionReceive  from 'carbon-icons-svelte/lib/ConnectionReceive.svelte';

export const menuItems= [
  {
    label: ls.inventory.product,
    icon: Box,
    href: "/inventory/products"
  },
  {
    label: ls.inventory.input,
    icon: ConnectionReceive,
    href: "/inventory/products"
  },
  {
    label: ls.inventory.output,
    icon: ConnectionSend,
    href: "/inventory/products"
  }


]