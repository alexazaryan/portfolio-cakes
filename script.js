function handleClick(buttonType) {
   const links = {
      donate: "https://www.donationalerts.com/r/your_username",
      catalog: "https://AzaCode.pro/catalog",
      recipes: "https://AzaCode.pro/recipes",
      telegram: "https://t.me/your_username",
      viber: "viber://chat?number=%2B1234567890",
      whatsapp: "https://wa.me/1234567890",
      instagram: "https://instagram.com/your_username",
      youtube: "https://youtube.com/@your_username",
      facebook: "https://facebook.com/your_username",
      tiktok: "https://tiktok.com/@your_username",
   };
   window.open(links[buttonType], "_blank");
}

// Добавляем/убираем активный класс при нажатии на карточку
document.querySelectorAll(".card").forEach((card) => {
   card.addEventListener("click", function (e) {
      // Убираем активный класс у всех
      document
         .querySelectorAll(".card")
         .forEach((c) => c.classList.remove("active"));
      // Добавляем текущему
      this.classList.add("active");
   });
});
