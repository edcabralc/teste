<template>
  <main>
    <hero-banner title="Confortável como um Abraço!" class="feedback-hero" />
    <div class="container-feedback">
      <div class="content-feedback">
        <div>
          <h2>Standard</h2>
        </div>
      </div>
    </div>
    <div class="content-form">
      <FormFeedback />
    </div>
  </main>
</template>

<script>
import HeroBanner from "@/components/commons/HeroBanner";
import FormFeedback from "@/components/FormFeedback";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FeedbackView",
  components: {
    HeroBanner,
    FormFeedback,
  },
};
</script>

<style src="./style.scss" lang="scss" />
