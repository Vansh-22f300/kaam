<script setup lang="ts">
import { ref } from "vue";

// 1. Reactive form state
const formData = ref({
  name: "",
  email: "",
  city: "",
  phone: "",
});

const validationErrors = ref({
  email: "",
  phone: "",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[0-9+\s()-]{10,20}$/;

const validateEmail = () => {
  const email = formData.value.email.trim();
  if (!email) return "EMAIL IS REQUIRED.";
  if (!emailRegex.test(email)) return "ENTER A VALID EMAIL ADDRESS.";
  return "";
};

const validatePhone = () => {
  const phone = formData.value.phone.trim();
  if (!phone) return "PHONE IS REQUIRED.";
  if (!phoneRegex.test(phone)) return "USE ONLY DIGITS, SPACE, +, -, ( ).";

  const digitCount = phone.replace(/\D/g, "").length;
  if (digitCount < 10) return "PHONE MUST HAVE AT LEAST 10 DIGITS.";
  if (digitCount > 15) return "PHONE CANNOT EXCEED 15 DIGITS.";
  return "";
};

const runValidation = () => {
  validationErrors.value.email = validateEmail();
  validationErrors.value.phone = validatePhone();

  return !validationErrors.value.email && !validationErrors.value.phone;
};

// 2. UI States
const isSubmitting = ref(false);
const isSuccess = ref(false);

// 3. The Submit Handler
const submitForm = async () => {
  if (!runValidation()) {
    alert("CHECK EMAIL AND PHONE FORMAT BEFORE SUBMITTING.");
    return;
  }

  isSubmitting.value = true;

  try {
    // We are using Formspree (or similar) here.
    // You will replace 'YOUR_ENDPOINT_ID' with the free ID they give you.
    const response = await fetch("https://formspree.io/f/meerrpev", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      isSuccess.value = true;
      // Clear the form
      formData.value = {
        name: "",
        email: "",
        city: "",
        phone: "",
      };
      validationErrors.value = { email: "", phone: "" };

      // Reset the success message after 5 seconds
      setTimeout(() => (isSuccess.value = false), 5000);
    }
  } catch (error) {
    console.error("Transmission failed:", error);
    alert("SYSTEM ERROR: Could not send message.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="contact-section">
    <div class="content-wrapper">
      <h2 class="section-title">INITIATE CONTACT.</h2>
      <p class="section-subtitle">DROP BASIC DETAILS. I WILL REACH OUT FAST.</p>

      <form @submit.prevent="submitForm" class="brutalist-form">
        <div class="form-headline">SECURE TRANSMISSION PANEL</div>

        <div class="form-grid">
          <div class="input-group">
            <label for="name">> NAME_</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              placeholder="ENTER YOUR DESIGNATION"
              class="brutalist-input"
            />
          </div>

          <div class="input-group">
            <label for="email">> EMAIL_</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              @blur="validationErrors.email = validateEmail()"
              @input="validationErrors.email = validateEmail()"
              placeholder="ENTER SECURE COMM LINK"
              class="brutalist-input"
              :class="{ invalid: !!validationErrors.email }"
            />
            <p v-if="validationErrors.email" class="error-text">
              {{ validationErrors.email }}
            </p>
          </div>

          <div class="input-group">
            <label for="city">> CITY_</label>
            <input
              type="text"
              id="city"
              v-model="formData.city"
              required
              placeholder="ENTER YOUR LOCATION"
              class="brutalist-input"
            />
          </div>

          <div class="input-group">
            <label for="phone">> PHONE_</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              required
              minlength="10"
              maxlength="20"
              pattern="[0-9+\s()-]{10,20}"
              inputmode="tel"
              @blur="validationErrors.phone = validatePhone()"
              @input="validationErrors.phone = validatePhone()"
              placeholder="ENTER CONTACT NUMBER"
              class="brutalist-input"
              :class="{ invalid: !!validationErrors.phone }"
            />
            <p v-if="validationErrors.phone" class="error-text">
              {{ validationErrors.phone }}
            </p>
          </div>
        </div>

        <button type="submit" class="brutalist-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting && !isSuccess">[ TRANSMIT DATA ]</span>
          <span v-if="isSubmitting">TRANSMITTING...</span>
          <span v-if="isSuccess">SUCCESS: TRANSMISSION RECEIVED</span>
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 8rem 2rem;
  background-color: var(--bg-color);
  border-top: var(--border-heavy);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 0.6rem;
  letter-spacing: -0.05em;
  color: var(--accent-yellow);
}

.section-subtitle {
  font-family: monospace;
  color: #b7b7b7;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  letter-spacing: 0.08em;
}

.brutalist-form {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: var(--border-heavy);
  padding: 2rem;
  background-color: rgba(7, 7, 7, 0.9);
  box-shadow: 8px 8px 0px var(--accent-yellow);
}

.form-headline {
  font-family: monospace;
  font-size: 1rem;
  font-weight: bold;
  color: var(--bg-color);
  background-color: var(--accent-yellow);
  border: 2px solid var(--accent-yellow);
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-family: monospace;
  font-weight: bold;
  font-size: 1.25rem;
  color: var(--text-main);
}

.brutalist-input {
  background-color: transparent;
  border: 2px solid #4a4a4a;
  color: var(--text-main);
  padding: 1rem;
  font-family: monospace;
  font-size: 1rem;
  outline: none;
  transition: all 0.1s linear;
  box-shadow: 4px 4px 0px #1a1a1a;
}

.brutalist-input:hover {
  border-color: var(--text-main);
  box-shadow: 6px 6px 0px var(--text-main);
  transform: translate(-2px, -2px);
}

/* The Harsh Focus State */
.brutalist-input:focus {
  border-color: var(--accent-yellow);
  box-shadow: 8px 8px 0px var(--accent-yellow);
  transform: translate(-4px, -4px);
}

.brutalist-input::placeholder {
  color: #555;
  text-transform: uppercase;
}

.brutalist-input.invalid {
  border-color: #ff4d4f;
  box-shadow: 6px 6px 0px #ff4d4f;
}

.error-text {
  margin: 0.2rem 0 0;
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: bold;
  color: #ff4d4f;
  letter-spacing: 0.03em;
}

/* The Action Button */
.brutalist-btn {
  margin-top: 0.4rem;
  background-color: var(--bg-color);
  color: var(--text-main);
  border: var(--border-heavy);
  padding: 1.5rem;
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s linear;
  box-shadow: 4px 4px 0px var(--text-main);
}

.brutalist-btn:hover:not(:disabled) {
  background-color: var(--accent-yellow);
  color: var(--bg-color);
  border-color: var(--accent-yellow);
  box-shadow: var(--shadow-harsh);
  transform: translate(-4px, -4px);
}

.brutalist-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: #555;
  color: #555;
  box-shadow: none;
}

.brutalist-btn:active:not(:disabled),
.brutalist-input:active {
  transform: translate(0, 0);
  box-shadow: none;
}

@media (min-width: 760px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }

  .form-grid .input-group:first-child,
  .form-grid .input-group:nth-child(2) {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .contact-section {
    padding: 6rem 1rem;
  }

  .brutalist-form {
    padding: 1.25rem;
    box-shadow: 5px 5px 0px var(--accent-yellow);
  }
}
</style>
