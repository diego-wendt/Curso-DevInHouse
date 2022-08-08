function sleep(number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(number), 3000);
    });
  }

sleep(10).then((res) => console.log(res));