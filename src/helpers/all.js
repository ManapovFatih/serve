// value - цена, currency - выводить валюту (true|false))
// import { LiaRubleSignSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { FILE_URL } from "../config/api";

// const customPrice = (value, currency = true) => {
//   if (!value) {
//     return 0 + "₽";
//   }
//   value = parseInt(value).toLocaleString();
//   if (currency) {
//     value = (
//       <>
//         {value}<LiaRubleSignSolid className="ruble" />
//       </>
//     );
//   }
//   return value;
// };
const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
const removeDescendants = (data, param, isMulti, parentId) => {
  if (!data.param) {
    if (isMulti) {
      return [param[0].data];
    }
    else {
      return [param];
    }
  }

  const filteredOptions = [...data.param];
  // if (param.data?.max) {
  //   const existingOptionIndex = filteredOptions.findIndex(item => item.id === option.id);

  //   // Если элемент найден, обновляем его
  //   if (existingOptionIndex !== -1) {
  //     if (option.max) {
  //       filteredOptions[existingOptionIndex] = {
  //         ...filteredOptions[existingOptionIndex],
  //         max: option.max,
  //       };
  //     }
  //     else if (option.min) {
  //       filteredOptions[existingOptionIndex] = {
  //         ...filteredOptions[existingOptionIndex],
  //         min: option.min,
  //       };
  //     }
  //     else {
  //       filteredOptions[existingOptionIndex] = {
  //         ...filteredOptions[existingOptionIndex],
  //         value: option.value,
  //       };
  //     }
  //   } else {
  //     // Если элемент не найден, добавляем его
  //     filteredOptions.push({
  //       ...option,
  //     });
  //   }
  // }
  // else {

  const descendants = [];

  // Ищем потомков с parentId, равным id option
  const findDescendants = (id) => {
    const found = filteredOptions.filter(item => item?.parentId === id);
    if (found.length > 0) {
      found.forEach(item => {
        descendants.push(item); // Добавляем найденного потомка в массив descendants
        findDescendants(item.id); // Рекурсивно ищем потомков этого потомка
      });
    }
  };
  if (isMulti) {
    findDescendants(param[0]?.data?.parentId ?? parentId);
  }
  else {
    findDescendants(param.id); // Начинаем поиск потомков с option.id
    if (param.parentId) {
      findDescendants(param.parentId ?? parentId);
    }
  }// Удаляем потомков из массива filteredOptions
  descendants.forEach(item => {
    filteredOptions.splice(filteredOptions.indexOf(item), 1);
  });

  // Добавляем option в filteredOptions
  if (isMulti) {
    if (param[0]?.data?.parentId) {
      filteredOptions.push(...param.map(e => e.data));
    }
  }
  else {
    if (param.parentId) {
      filteredOptions.push(param);
    }
  }

  return filteredOptions;
};

const Timer = ({ update = false, value = 60, onEnd }) => {
  const [counter, setCounter] = useState(value);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      onEnd()
    }
    return () => clearInterval(timer);
  }, [counter, update]);

  return counter
}

const getImageURL = ({ path = "", size = "mini", type = "user" }) => {
  if (path && Array.isArray(path) && path?.length > 0) {
    if (size == "mini") {
      return FILE_URL + "/" + type + "/mini/" + path[0].media;
    } else {
      return FILE_URL + "/" + type + "/" + path[0].media;
    }
  } else if (path && path?.length > 0) {
    if (size == "mini") {
      return FILE_URL + "/" + type + "/mini/" + path;
    } else {
      return FILE_URL + "/" + type + "/" + path;
    }
  }
  else if (type == 'product/cover') {
    return "/imgs/img4.jpg";
  }

  else if (!type || type == 'product' || type == 'sale' || type == 'banner' || type == 'category' || type == 'news') {
    return "/imgs/img5.jpg";
  } else if (type == 'user') {
    return "/imgs/user.png";
  }
};

export { getImageURL, declOfNum, removeDescendants, Timer };