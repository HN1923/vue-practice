import { ref } from "vue";

// 기본값을 넘겨주지 않은 component에서는 초기값 0
function useMoney(initialTotalMoney = 0) {
  const totalMoney = ref(initialTotalMoney);
  function addMoney(price) {
    totalMoney.value += price;
  }

  return {
    totalMoney,
    addMoney,
  };
}

export default useMoney; // 만든 함수를 내보냄
