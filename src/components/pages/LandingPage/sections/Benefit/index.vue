<script lang="ts" setup>
let benefits= [
  {
    img: '/assets/icons/akar-icons_shipping-box-02.svg',
    title: 'Free Shipping',
    description: 'No charge for each delivery'
  },
  {
    img: '/assets/icons/fluent_wallet-credit-card-16-regular.svg',
    title: 'Quick Payment',
    description: '100% secure payment'
  },
  {
    img: '/assets/icons/ri_customer-service-2-line.svg',
    title: '24/7 Support',
    description: 'Quick support'
  }
]
</script>

<template>
  <Container class="flex justify-between">
    <BenefitItem v-for="(item, index) in benefits" :key="index" :benefit="item"></BenefitItem>
  </Container>
</template>
