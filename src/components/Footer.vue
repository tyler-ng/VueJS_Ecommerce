<template>
  <div id="app">
    <b-card-footer toggleable="lg" type="dark" variant="dark">
      <div class="row py-4 d-flex align-items-center">
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0">Social Media apps</h6>
        </div>
        <div class="col-md-6 col-lg-7 text-center text-md-right">
          <a class="fb-ic">
            <i class="fab fa-facebook-f white-text mr-4"> </i>
          </a>
          <a class="tw-ic">
            <i class="fab fa-twitter white-text mr-4"> </i>
          </a>
          <a class="gplus-ic">
            <i class="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          <a class="li-ic">
            <i class="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          <a class="ins-ic">
            <i class="fab fa-instagram white-text"> </i>
          </a>
        </div>
      </div>
      <hr />
      <div class="container text-center text-md-left mt-4">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
            <h6 class="text-uppercase font-weight-bold">About us</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px;"
            />
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
            <h6 class="text-uppercase font-weight-bold">Links</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px;"
            />
            <p>
              <a href="#!">Sign In</a>
            </p>
            <p>
              <a href="#!">Products List</a>
            </p>
            <p>
              <a href="#!">Features</a>
            </p>
            <p>
              <a href="#!">Pricing</a>
            </p>
            <p>
              <a href="#!">About</a>
            </p>
            <p>
              <a href="#!">Shopping Cart</a>
            </p>
          </div>

          <div class="col-md3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px;"
            />
            <p><i class="fas fa-home mr-3"></i> Waterloo, Ontario, N1B 2N9</p>
            <p>
              <i class="fas fa-envelope mr-3"></i> students@conestogac.on.ca
            </p>
            <p><i class="fas fa-phone mr-3"></i> + 1 647 909 85 04</p>
          </div>
        </div>
      </div>
      <hr />
      <p>&copy; Volka Team. All the rights reserved, 2021.</p>
    </b-card-footer>
  </div>
</template>
<script>
export default {
  name: "FooTer"
};
</script>
<style>
h5 {
  margin-left: 40px;
}
.float-right {
  margin-right: 40px;
}
</style>
