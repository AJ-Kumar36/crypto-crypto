<template>
  <div>
    <span>
        <span v-for="item in createLetterArr()" v-bind:key="item" display:inline-block>
          <CircleLetter :letter="item"></CircleLetter>
        </span>
        
        <div v-for="item in createNumArr()" v-bind:key="item" display:inline-block>
          {{item}}
        </div>
    </span>
  </div>
</template>



<script>
import CircleLetter from '../Common/CircleLetter.vue';
export default {
  name: 'VigenereAlphabet',
  components: {
    CircleLetter,
  },
  methods: {
    createLetterArr() {
      let letters = [];
      for (let i = 0; i < 26; i++) {
        letters.push(String.fromCharCode(i + 65));
      }
      return letters;
    },
    createNumArr() {
      let nums = [];
      for(let i = 0; i < 26; i++)
      {
        nums.push(i);
      }
      return nums;
    }
  }
}

//let letterArr = new Vue({


//let letterArr = ['a','b','c','d'];
/*for(let i = 0; i < 26; i++)
{
    letterArr.push(String.fromCharCode(i + 97));
    let letter = String.fromCharCode(i+97);
    console.log(letter);
   // document.getElementById('letter').innerHTML = letter;
}*/
//console.log(letterArr);
</script>

<style scoped>
</style>