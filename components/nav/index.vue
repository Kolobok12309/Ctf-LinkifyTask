<template>
  <BNavbar
    toggleable="lg"
    type="dark"
    variant="danger"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />

    <BCollapse
      id="nav-collapse"
      is-nav
    >
      <BNavbarNav>
        <BNavItem href="/away?url=https%3A%2F%2Fwww.google.com">Away</BNavItem>
        <BNavItem href="/about">
          About
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
