<template>
  <div class="flex flex-col items-center justify-center mt-[20px]">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Currency Converter</h2>

      <input
          type="number"
          v-model="data.amount"
          placeholder="Amount"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
      />

      <select v-model="data.from"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4">
        <option disabled value="">From Currency</option>
        <option v-for="(name, code) in currencies" :key="code" :value="code">{{ code }} - {{ name }}</option>
      </select>

      <select v-model="data.to"
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4">
        <option disabled value="">To Currency</option>
        <option v-for="(name, code) in currencies" :key="code" :value="code">{{ code }} - {{ name }}</option>
      </select>

      <button @click="convertCurrency"
              class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Convert
      </button>

      <div v-if="conversionResult !== null" class="mt-6 text-center">
        <p class="text-lg font-medium text-gray-700">1 {{ data.from}} = {{ conversionResult }} {{ data.to}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const data = reactive({
      amount: 1,
      from: '',
      to: '',
    });

    const currencies = reactive({});
    const conversionResult = ref(null);

    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.fastforex.io/currencies', {
          params: { api_key: '49d088c70c-c9be120316-smgygb' }
        });
        Object.assign(currencies, response.data.currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        alert('Failed to fetch currency list.');
      }
    };

    const convertCurrency = async () => {
      if (!data.amount || !data.from || !data.to) {
        alert('Fill all!!!!');
        return;
      }
      try {
        const response = await axios.get('https://api.fastforex.io/convert', {
          params: {
            from: data.from,
            to: data.to,
            amount: data.amount,
            api_key: '49d088c70c-c9be120316-smgygb'
          }
        });
        conversionResult.value = response.data.result[data.to];
      } catch (error) {
        console.error('Error fetching conversion data:', error);
        alert('Failed to fetch conversion data.');
      }
    };

    onMounted(fetchCurrencies);

    return {
      data,
      currencies,
      conversionResult,
      convertCurrency,
    };
  }
};
</script>

<style scoped>
/* Optional: Add any custom styles here */
</style>
