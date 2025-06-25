function createXMLDocument() {
    let documentImplementation = document.implementation;
    let doc = documentImplementation.createDocument(null, null);

    documentImplementation.createHTMLDocument();

    //Hotel
    let hotel = doc.createElement("hotel");
    hotel.setAttribute("star_rating", "4");
    doc.appendChild(hotel);

    //Room info
    let room = doc.createElement("room");
    room.setAttribute("id", "r201");
    room.setAttribute("type", "Студио");
    room.setAttribute("view", "Да");
    room.setAttribute("has_tv", "Да");
    hotel.appendChild(room);

    let roomNumber = doc.createElement("number");
    room.appendChild(roomNumber);
    roomNumber.appendChild(doc.createTextNode("201"));

    let roomPrice = doc.createElement("price");
    roomPrice.setAttribute("currency", "EUR");
    room.appendChild(roomPrice);
    roomPrice.appendChild(doc.createTextNode("180"));

    //Room Cleaning services
    let roomCleaningService = doc.createElement("cleaning_service");
    room.appendChild(roomCleaningService);

    let numberOfMaids = doc.createElement("number_of_maids");
    roomCleaningService.appendChild(numberOfMaids);
    numberOfMaids.appendChild(doc.createTextNode("3"));

    let cleaningDuration = doc.createElement("cleaning_duration");
    roomCleaningService.appendChild(cleaningDuration);
    cleaningDuration.appendChild(doc.createTextNode("45 минути"));

    let numberOfCleaningsPerStay = doc.createElement("number_of_cleanings_per_stay");
    roomCleaningService.appendChild(numberOfCleaningsPerStay);
    numberOfCleaningsPerStay.appendChild(doc.createTextNode("2"));

    //Room Reservation
    let roomReservation = doc.createElement("reservation");
    roomReservation.setAttribute("code", "res201");
    room.appendChild(roomReservation);

    let guestName = doc.createElement("guest_name");
    roomReservation.appendChild(guestName);
    guestName.appendChild(doc.createTextNode("Мария Иванова"));

    let phoneNumber = doc.createElement("phone_number");
    roomReservation.appendChild(phoneNumber);
    phoneNumber.appendChild(doc.createTextNode("+359 88 9876543"));

    let checkInDate = doc.createElement("check_in_date");
    roomReservation.appendChild(checkInDate);
    checkInDate.appendChild(doc.createTextNode("2023-11-15"));

    let checkOutDate = doc.createElement("check_out_date");
    roomReservation.appendChild(checkOutDate);
    checkOutDate.appendChild(doc.createTextNode("2023-11-20"));

    //Room Two info
    let roomTwo = doc.createElement("room");
    roomTwo.setAttribute("id", "r202");
    roomTwo.setAttribute("type", "Апартмент");
    roomTwo.setAttribute("view", "Не");
    roomTwo.setAttribute("has_tv", "Да");
    hotel.appendChild(roomTwo);

    let roomTwoNumber = doc.createElement("number");
    roomTwo.appendChild(roomTwoNumber);
    roomTwoNumber.appendChild(doc.createTextNode("202"));

    let roomTwoPrice = doc.createElement("price");
    roomTwoPrice.setAttribute("currency", "EUR");
    roomTwo.appendChild(roomTwoPrice);
    roomTwoPrice.appendChild(doc.createTextNode("250"));

    //Room Two reservation
    let roomTwoReservation = doc.createElement("reservation");
    roomTwoReservation.setAttribute("code", "res202");
    roomTwo.appendChild(roomTwoReservation);

    let roomTwoGuestName = doc.createElement("guest_name");
    roomTwoReservation.appendChild(roomTwoGuestName);
    roomTwoGuestName.appendChild(doc.createTextNode("Георги Петров"));

    let roomTwoPhoneNumber = doc.createElement("phone_number");
    roomTwoReservation.appendChild(roomTwoPhoneNumber);
    roomTwoPhoneNumber.appendChild(doc.createTextNode("+359 88 1112233"));

    let roomTwoCheckInDate = doc.createElement("check_in_date");
    roomTwoReservation.appendChild(roomTwoCheckInDate);
    roomTwoCheckInDate.appendChild(doc.createTextNode("2023-11-18"));

    let roomTwoCheckOutDate = doc.createElement("check_out_date");
    roomTwoReservation.appendChild(roomTwoCheckOutDate);
    roomTwoCheckOutDate.appendChild(doc.createTextNode("2023-11-25"));

    //Hall info
    let hall = doc.createElement("hall");
    hall.setAttribute("id", "h3");
    hall.setAttribute("type", "Спа");
    hall.setAttribute("fee", "Платена");
    hall.setAttribute("is_available", "Да");
    hotel.appendChild(hall);

    let hallName = doc.createElement("name");
    hall.appendChild(hallName);
    hallName.appendChild(doc.createTextNode("СПА Зона"));

    let hallNote = doc.createElement("note");
    hall.appendChild(hallNote);
    hallNote.appendChild(doc.createTextNode("Пълен релакс и зареждане"));

    let hallWorkTime = doc.createElement("work_time");
    hall.appendChild(hallWorkTime);
    hallWorkTime.appendChild(doc.createTextNode("10:00 - 20:00"));

    let hallCapacity = doc.createElement("capacity");
    hall.appendChild(hallCapacity);
    hallCapacity.appendChild(doc.createTextNode("20"));

    //Hall Activity
    let hallActivity = doc.createElement("activity");
    hallActivity.setAttribute("type", "Масаж");
    hall.appendChild(hallActivity);

    let activityHost = doc.createElement("host");
    hallActivity.appendChild(activityHost);
    activityHost.appendChild(doc.createTextNode("Петър Георгиев"));

    let numberOfPeople = doc.createElement("number_of_people");
    hallActivity.appendChild(numberOfPeople);
    numberOfPeople.appendChild(doc.createTextNode("1"));

    let ageRestrictions = doc.createElement("age_restrictions");
    hallActivity.appendChild(ageRestrictions);
    ageRestrictions.appendChild(doc.createTextNode("Няма"));

    let activityDuration = doc.createElement("duration");
    hallActivity.appendChild(activityDuration);
    activityDuration.appendChild(doc.createTextNode("1 час"));

    let numberOfBreaks = doc.createElement("number_of_breaks");
    hallActivity.appendChild(numberOfBreaks);
    numberOfBreaks.appendChild(doc.createTextNode("0"));

    //Hall Two info
    let hallTwo = doc.createElement("hall");
    hallTwo.setAttribute("id", "h4");
    hallTwo.setAttribute("type", "Фитнес");
    hallTwo.setAttribute("fee", "Безплатна");
    hallTwo.setAttribute("is_available", "Да");
    hotel.appendChild(hallTwo);

    let hallTwoName = doc.createElement("name");
    hallTwo.appendChild(hallTwoName);
    hallTwoName.appendChild(doc.createTextNode("Фитнес Зала"));

    let hallTwoNote = doc.createElement("note");
    hallTwo.appendChild(hallTwoNote);
    hallTwoNote.appendChild(doc.createTextNode("Тренирай здраво!"));

    let hallTwoWorkTime = doc.createElement("work_time");
    hallTwo.appendChild(hallTwoWorkTime);
    hallTwoWorkTime.appendChild(doc.createTextNode("08:00 - 22:00"));

    let hallTwoCapacity = doc.createElement("capacity");
    hallTwo.appendChild(hallTwoCapacity);
    hallTwoCapacity.appendChild(doc.createTextNode("30"));

    //Hall Activity
    let hallTwoActivity = doc.createElement("activity");
    hallTwoActivity.setAttribute("type", "Тренировка");
    hallTwo.appendChild(hallTwoActivity);

    let activityTwoHost = doc.createElement("host");
    hallTwoActivity.appendChild(activityTwoHost);
    activityTwoHost.appendChild(doc.createTextNode("Димитър Йорданов"));

    let numberOfPeopleInHallTwo = doc.createElement("number_of_people");
    hallTwoActivity.appendChild(numberOfPeopleInHallTwo);
    numberOfPeopleInHallTwo.appendChild(doc.createTextNode("10"));

    let ageRestrictionsInHallTwo = doc.createElement("age_restrictions");
    hallTwoActivity.appendChild(ageRestrictionsInHallTwo);
    ageRestrictionsInHallTwo.appendChild(doc.createTextNode("Над 16 години"));

    let activityTwoDuration = doc.createElement("duration");
    hallTwoActivity.appendChild(activityTwoDuration);
    activityTwoDuration.appendChild(doc.createTextNode("2 часа"));

    let numberOfBreaksInHallTwo = doc.createElement("number_of_breaks");
    hallTwoActivity.appendChild(numberOfBreaksInHallTwo);
    numberOfBreaksInHallTwo.appendChild(doc.createTextNode("1"));

    //Restaurant 
    let restaurant = doc.createElement("restaurant");
    restaurant.setAttribute("id", "rest2");
    restaurant.setAttribute("smoking_allowed", "Да");
    hotel.appendChild(restaurant);

    //Menu
    let menu = doc.createElement("menu");
    restaurant.appendChild(menu);

    //First dish
    let firstDish = doc.createElement("dish");
    menu.appendChild(firstDish);

    let firstDishCategory = doc.createElement("category");
    firstDish.appendChild(firstDishCategory);
    firstDishCategory.appendChild(doc.createTextNode("Супи"));

    let firstDishName = doc.createElement("food_name");
    firstDish.appendChild(firstDishName);
    firstDishName.appendChild(doc.createTextNode("Таратор"));

    let firstDishDescription = doc.createElement("description");
    firstDish.appendChild(firstDishDescription);
    firstDishDescription.appendChild(doc.createTextNode("Кисело мляко, краставици, копър, орехи"));

    let firstDishPrice = doc.createElement("price_of_dish");
    firstDishPrice.setAttribute("currency", "BGN")
    firstDish.appendChild(firstDishPrice);
    firstDishPrice.appendChild(doc.createTextNode("3"));

    let firstDishAmount = doc.createElement("amount");
    firstDish.appendChild(firstDishAmount);
    firstDishAmount.appendChild(doc.createTextNode("300гр"));

    //Second dish
    let secondDish = doc.createElement("dish");
    menu.appendChild(secondDish);

    let secondDishCategory = doc.createElement("category");
    secondDish.appendChild(secondDishCategory);
    secondDishCategory.appendChild(doc.createTextNode("Основни ястия"));

    let secondDishName = doc.createElement("food_name");
    secondDish.appendChild(secondDishName);
    secondDishName.appendChild(doc.createTextNode("Паста Болонезе"));

    let secondDishDescription = doc.createElement("description");
    secondDish.appendChild(secondDishDescription);
    secondDishDescription.appendChild(doc.createTextNode("Спагети, доматен сос, сос Болонезе (кайма, лук, моркови), кашкавал"));

    let secondDishPrice = doc.createElement("price_of_dish");
    secondDishPrice.setAttribute("currency", "BGN")
    secondDish.appendChild(secondDishPrice);
    secondDishPrice.appendChild(doc.createTextNode("12"));

    let secondDishAmount = doc.createElement("amount");
    secondDish.appendChild(secondDishAmount);
    secondDishAmount.appendChild(doc.createTextNode("250гр"));

    //Third dish
    let thirdDish = doc.createElement("dish");
    menu.appendChild(thirdDish);

    let thirdDishCategory = doc.createElement("category");
    thirdDish.appendChild(thirdDishCategory);
    thirdDishCategory.appendChild(doc.createTextNode("Десерти"));

    let thirdDishName = doc.createElement("food_name");
    thirdDish.appendChild(thirdDishName);
    thirdDishName.appendChild(doc.createTextNode("Шоколадов мус"));

    let thirdDishDescription = doc.createElement("description");
    thirdDish.appendChild(thirdDishDescription);
    thirdDishDescription.appendChild(doc.createTextNode("Пухкав крем с натурален белгийски шоколад"));

    let thirdDishPrice = doc.createElement("price_of_dish");
    thirdDishPrice.setAttribute("currency", "BGN")
    thirdDish.appendChild(thirdDishPrice);
    thirdDishPrice.appendChild(doc.createTextNode("8"));

    let thirdDishAmount = doc.createElement("amount");
    thirdDish.appendChild(thirdDishAmount);
    thirdDishAmount.appendChild(doc.createTextNode("200гр"));    

    //Restaurant info
    let seatingCapacity = doc.createElement("seating_capacity");
    restaurant.appendChild(seatingCapacity);
    seatingCapacity.appendChild(doc.createTextNode("60"));

    let openingHours = doc.createElement("opening_hours");
    restaurant.appendChild(openingHours);
    openingHours.appendChild(doc.createTextNode("7:00 - 00:00"));

    return doc;
}