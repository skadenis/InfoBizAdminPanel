'use strict';

module.exports = {
    contacts: {
        phone: '+375 (29) 353-27-28',
        support: 'support@gastrosoft.by',
        abuse: 'abuse@gastrosoft.by',
        address: '220049, г.Минск, ул. Волгоградская д. 86, оф. 1Н',
        coords: [
            53.938600,
            27.607427
        ]
    },
    currency: {
        locales: 'BY',
        style: 'currency',
        currency: 'BYN',
    },
    gtm: {
        id: "GTM-TG8NB56", // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
        // queryParams: {
        //   // Add url query string when load gtm.js with GTM ID (optional)
        //   gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
        //   gtm_preview: "env-4",
        //   gtm_cookies_win: "x",
        // },
        defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
        enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: true, // Whether or not display console logs debugs (optional)
        loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
        ignoredViews: [], // Don't trigger events for specified router names (case insensitive) (optional)
        trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    },
    TextLocalization: {
        TotalAmountOfTheDocument: {
            RU: 'Общая сумма документа',
            UA: '',
            POL: '',
            ENG: 'Total amount of the document',
            DE: ''
        },
        FullDescriptionAddCompletedAct:{
            RU: '',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        AddCompletedAct:{
            RU: 'Добавить акт выполненных работ',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        DeliveryTerms: {
            RU: 'Условия доставки',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        actualBalance: {
            RU: 'Актуальный балланс',
            UA: 'Актуальний баланс',
            POL: 'Rzeczywiste saldo',
            ENG: 'Actual balance',
            DE: 'Tatsächlicher saldo'
        },
        AmountToBeCredited: {
            RU: 'Сумма к зачислению',
            UA: 'Сума до зарахування',
            POL: 'Kwota do zasilenia',
            ENG: 'Amount to be credited',
            DE: 'Gutschriftsbetrag'
        },
        FinalBalance: {
            RU: 'Итоговый баланс',
            UA: 'Підсумковий баланс',
            POL: 'Saldo końcowe',
            ENG: 'Final balance',
            DE: 'Endsaldo'
        },
        Partner: {
            RU: 'Партнер',
            UA: 'Партнер',
            POL: 'Partner',
            ENG: 'Partner',
            DE: 'Partner'
        },
        Description: {
            RU: 'Описание',
            UA: 'Опис',
            POL: 'Opis',
            ENG: 'Description',
            DE: 'Beschreibung'
        },
        AddPayment: {
            RU: 'Добавить оплату',
            UA: 'Додати оплату',
            POL: 'Dodaj płatność',
            ENG: 'Add payment',
            DE: 'Zahlung hinzufügen'
        },
        PaymentWasSuccessfullyRegistered: {
            RU: 'Платеж успешно зарегистрирован',
            UA: 'Платіж успішно зареєстрований',
            POL: 'Płatność zarejestrowana pomyślnie',
            ENG: 'Payment was successfully registered',
            DE: 'Zahlung erfolgreich registriert'
        },
        Login: {
            RU: 'Логин',
            UA: '',
            POL: '',
            ENG: 'Login',
            DE: 'Anmeldung'
        },
        Home: {
            RU: 'Главная',
            UA: '',
            POL: '',
            ENG: 'Home',
            DE: 'Heimat'
        },
        Applications: {
            RU: 'Приложения',
            UA: '',
            POL: '',
            ENG: 'Applications',
            DE: 'Anwendungen'
        },
        Bookkeeping: {
            RU: 'Бухгалтерия',
            UA: '',
            POL: '',
            ENG: 'Bookkeeping',
            DE: 'Buchhaltung'
        },
        TransferFundsToTheAccountOfALegalEntity: {
            RU: 'Зачислить денежные средства на счет юридического лица',
            UA: '',
            POL: '',
            ENG: 'Transfer funds to the account of a legal entity',
            DE: 'Geld auf das Konto einer juristischen Person überweisen'
        },
        Exit:  {
            RU: 'Выйти',
            UA: '',
            POL: '',
            ENG: 'Exit',
            DE: 'Ausloggen'
        },
        AddingFundsToTheBalanceOfTheApplicationOfALegalEntity: {
            RU: 'Добавление денежных средств на баланс приложения юридического лица',
            UA: '',
            POL: '',
            ENG: 'Adding funds to the balance of the application of a legal entity',
            DE: 'Hinzufügen von Mitteln zum Saldo des Antrags einer juristischen Person'
        },
        AddThePromisedPaymentToTheBalanceOfTheLegalEntity: {
            RU: 'Добавить обещаный платеж на баланс юридического лица',
            UA: '',
            POL: '',
            ENG: 'Add the promised payment to the balance of the legal entity',
            DE: 'Fügen Sie die versprochene Zahlung dem Saldo der juristischen Person hinzu'
        },
        AddingThePromisedPaymentToTheBalanceOfTheLegalEntityApplication: {
            RU: 'Добавление обещанного платежа на баланс приложения юридического лица',
            UA: '',
            POL: '',
            ENG: 'Adding the promised payment to the balance of the legal entity application',
            DE: 'Hinzufügen der versprochenen Zahlung zum Saldo des Antrags der juristischen Person'
        },
        Back: {
            RU: 'Назад',
            UA: '',
            POL: '',
            ENG: 'Back',
            DE: 'Zurück'
        },
        RemoveErroneousPaymentFromTheBalanceOfALegalEntity: {
            RU: 'Удалить ошибочную оплату с баланса юридического лица',
            UA: '',
            POL: '',
            ENG: 'Remove erroneous payment from the balance of a legal entity',
            DE: 'Entfernen Sie fehlerhafte Zahlungen aus dem Saldo einer juristischen Person'
        },
        RegisterOfCompletedActsOfWorkPerformedForThePeriod: {
            RU: 'Реестр сформированных актов выполненных работ за период',
            UA: '',
            POL: '',
            ENG: 'Register of completed acts of work performed for the period',
            DE: 'Verzeichnis der abgeschlossenen Arbeitsleistungen für den Zeitraum'
        },
        InformationAboutAllTheWorkPerformedToAllPartnersForThePeriod: {
            RU: 'Информация о всех выполненных работах всем партнерам за период',
            UA: '',
            POL: '',
            ENG: 'Information about all the work performed to all partners for the period',
            DE: 'Informationen über alle durchgeführten Arbeiten an alle Partner für den Zeitraum'
        },
        RegisterOfPaymentsReceivedForThePeriod: {
            RU: 'Реестр полученных оплат за период',
            UA: '',
            POL: '',
            ENG: 'Register of payments received for the period',
            DE: 'Register der Zahlungseingänge für den Zeitraum'
        },
        InformationAboutAllBalanceTopUpsFromPartnersForThePeriod: {
            RU: 'Информация о всех пополнениях баланса от партеров за период',
            UA: '',
            POL: '',
            ENG: 'Information about all balance top-ups from partners for the period',
            DE: 'Informationen zu allen Guthabenaufladungen von Partnern für den Zeitraum'
        },
        CreateAMobileApp: {
            RU: 'Создать мобильное приложение',
            UA: '',
            POL: '',
            ENG: 'Create a mobile app',
            DE: 'Erstellen Sie eine mobile App'
        },
        AddContact: {
            RU: 'Добавить контакт',
            UA: '',
            POL: '',
            ENG: 'Add contact',
            DE: 'Kontakt hinzufügen'
        },
        EditContact: {
            RU: 'Редактировать контакт',
            UA: '',
            POL: '',
            ENG: 'Edit contact',
            DE: 'Kontakt bearbeiten'
        },
        Application: {
            RU: 'Приложение',
            UA: '',
            POL: '',
            ENG: 'Application',
            DE: 'Anwendung'
        },
        Company: {
            RU: 'Компания',
            UA: '',
            POL: '',
            ENG: 'Company',
            DE: 'Gesellschaft'
        },
        More: {
            RU: 'Больше',
            UA: '',
            POL: '',
            ENG: 'More',
            DE: 'Mehr'
        },
        Equals: {
            RU: 'Равно',
            UA: '',
            POL: '',
            ENG: 'Equals',
            DE: 'Ist gleich'
        },
        Smaller: {
            RU: 'Меньше',
            UA: '',
            POL: '',
            ENG: 'Smaller',
            DE: 'Kleiner'
        },
        AddBranch: {
            RU: 'Добавить филиал',
            UA: '',
            POL: '',
            ENG: 'Add branch',
            DE: 'Filiale hinzufügen'
        },
        EditBranch: {
            RU: 'Редактировать филиал',
            UA: '',
            POL: '',
            ENG: 'Edit branch',
            DE: 'Filiale bearbeiten'
        },
        AddUser: {
            RU: 'Добавить пользователя',
            UA: '',
            POL: '',
            ENG: 'Add user',
            DE: 'Nutzer hinzufügen'
        },
        EditUser: {
            RU: 'Редактировать пользователя',
            UA: '',
            POL: '',
            ENG: 'Edit user',
            DE: 'Benutzer bearbeiten'
        },
        EditApplication: {
            RU: 'Редактировать мобильное приложение',
            UA: '',
            POL: '',
            ENG: 'Edit application',
            DE: 'Bewerbung bearbeiten'
        },
        Surname: {
            RU: 'Фамилия',
            UA: '',
            POL: '',
            ENG: 'Surname',
            DE: 'Nachname'
        },
        Name: {
            RU: 'Имя',
            UA: '',
            POL: '',
            ENG: 'Name',
            DE: 'Name'
        },
        Lastname: {
            RU: 'Отчество',
            UA: '',
            POL: '',
            ENG: 'Lastname',
            DE: 'Vatersname'
        },
        Users: {
            RU: 'Пользователи',
            UA: '',
            POL: '',
            ENG: 'Users',
            DE: 'Benutzer'
        },
        PhoneNumber: {
            RU: 'Номер телефона',
            UA: '',
            POL: '',
            ENG: 'Phone number',
            DE: 'Telefonnummer'
        },
        Position: {
            RU: 'Должность',
            UA: '',
            POL: '',
            ENG: 'Position',
            DE: 'Position'
        },
        FullName: {
            RU: 'ФИО',
            UA: '',
            POL: '',
            ENG: 'Full name',
            DE: 'Vollständiger Name'
        },
        Address: {
            RU: 'Адрес',
            UA: '',
            POL: '',
            ENG: 'Address',
            DE: 'die Anschrift'
        },
        BranchesOfTheOrganization: {
            RU: 'Торговые точки',
            UA: '',
            POL: '',
            ENG: 'Branches of the organization',
            DE: 'Niederlassungen der Organisation'
        },

        BranchesOfTheOrganizationDescription: {
            RU: 'Добавление и удаление информации о филиалах ресторана',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        ContactsInTheOrganization: {
            RU: 'Контакты в организации',
            UA: '',
            POL: '',
            ENG: 'Contacts in the organization',
            DE: 'Kontakte in der Organisation'
        },
        ReportStartDate: {
            RU: 'Дата начала отчета',
            UA: '',
            POL: '',
            ENG: 'Report start date',
            DE: ''
        },
        ReportEndDate: {
            RU: 'Дата окончания отчета',
            UA: '',
            POL: '',
            ENG: 'Report end date',
            DE: ''
        },
        GenerateAReport: {
            RU: 'Сгенерировать отчет',
            UA: '',
            POL: '',
            ENG: 'Generate a report',
            DE: ''
        },
        Date: {
            RU: 'Дата',
            UA: '',
            POL: '',
            ENG: 'Date',
            DE: ''
        },
        Payer: {
            RU: 'Плательщик',
            UA: '',
            POL: '',
            ENG: 'Payer',
            DE: ''
        },
        Amount: {
            RU: 'Сумма',
            UA: '',
            POL: '',
            ENG: 'Amount',
            DE: ''
        },
        Add: {
            RU: 'Добавить',
            UA: '',
            POL: '',
            ENG: 'Add',
            DE: ''
        },
        Edit: {
            RU: 'Сохранить',
            UA: '',
            POL: '',
            ENG: 'Edit',
            DE: ''
        },
        Delete: {
            RU: 'Удалить',
            UA: '',
            POL: '',
            ENG: 'Delete',
            DE: ''
        },
        AreYouSure: {
            RU: 'Вы уверены?',
            UA: '',
            POL: '',
            ENG: 'Are you sure?',
            DE: ''
        },
        AreYouSureYouWantToDelete: {
            RU: 'Вы уверены что вы хотите удалить?',
            UA: '',
            POL: '',
            ENG: 'Are you sure you want to delete?',
            DE: ''
        },
        CategoryName: {
            RU: 'Название категории',
            UA: '',
            POL: '',
            ENG: 'Category name',
            DE: ''
        },
        CategoryDescription: {
            RU: 'Описание категории',
            UA: '',
            POL: '',
            ENG: 'Category description',
            DE: ''
        },
        DishName: {
            RU: 'Название блюда',
            UA: '',
            POL: '',
            ENG: 'Dish name',
            DE: ''
        },
        Image: {
            RU: 'Картинка',
            UA: '',
            POL: '',
            ENG: 'Image',
            DE: ''
        },
        Min: {
            RU: 'Мин',
            UA: '',
            POL: '',
            ENG: 'Min',
            DE: ''
        },
        Max: {
            RU: 'Макс',
            UA: '',
            POL: '',
            ENG: 'Max',
            DE: ''
        },
        AddSize: {
            RU: 'Добавить размер блюда',
            UA: '',
            POL: '',
            ENG: 'Add dish size',
            DE: ''
        },
        AddModifiersGroup: {
            RU: 'Создать группу модификаторов',
            UA: '',
            POL: '',
            ENG: 'Add modifiers group',
            DE: ''
        },
        AddModifier: {
            RU: 'Добавить модификатор',
            UA: '',
            POL: '',
            ENG: 'Add modifier',
            DE: ''
        },
        OldPrice: {
            RU: 'Старая цена',
            UA: '',
            POL: '',
            ENG: 'Old price',
            DE: ''
        },
        Price: {
            RU: 'Цена',
            UA: '',
            POL: '',
            ENG: 'Price',
            DE: ''
        },
        Title: {
            RU: 'Название',
            UA: '',
            POL: '',
            ENG: 'Title',
            DE: ''
        },
        DishSizes: {
            RU: 'Размеры блюда',
            UA: '',
            POL: '',
            ENG: 'Dish sizes',
            DE: ''
        },
        Modifiers: {
            RU: 'Модификаторы',
            UA: '',
            POL: '',
            ENG: 'Modifiers',
            DE: ''
        },
        EditDish: {
            RU: 'Редактировать блюдо',
            UA: '',
            POL: '',
            ENG: 'Edit dish',
            DE: ''
        },
        AddDish: {
            RU: 'Добавить товар',
            UA: '',
            POL: '',
            ENG: 'Add good',
            DE: ''
        },
        EditSize: {
            RU: 'Редактировать размер',
            UA: '',
            POL: '',
            ENG: 'Edit size',
            DE: ''
        },
        ApplicationSettings: {
            RU: 'Настройки приложения',
            UA: '',
            POL: '',
            ENG: 'Application settings',
            DE: ''
        },
        APIIntegration: {
            RU: 'API интеграция',
            UA: '',
            POL: '',
            ENG: 'API Integration',
            DE: ''
        },
        OrderTransferMethods: {
            RU: 'Способы информирования о новых заказах',
            UA: '',
            POL: '',
            ENG: 'Order transfer methods',
            DE: ''
        },
        SocialNetworks: {
            RU: 'Социальные сети',
            UA: '',
            POL: '',
            ENG: 'Social networks',
            DE: ''
        },
        DeliveryZones: {
            RU: 'Зоны доставки',
            UA: '',
            POL: '',
            ENG: 'Delivery zones',
            DE: ''
        },
        FormsOfPayment: {
            RU: 'Формы оплаты',
            UA: '',
            POL: '',
            ENG: 'Forms of payment',
            DE: ''
        },
        Settings: {
            RU: 'Настройки',
            UA: '',
            POL: '',
            ENG: 'Settings',
            DE: ''
        },
        OrderingMethods: {
            RU: 'Способы оформления заказа',
            UA: '',
            POL: '',
            ENG: 'Ordering methods',
            DE: ''
        },
        OrderingMethodsDescription: {
            RU: 'Настройка возможности самовывоза и доставки курьером',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        Orders: {
            RU: 'Заказы',
            UA: '',
            POL: '',
            ENG: 'Orders',
            DE: ''
        },
        Menu: {
            RU: 'Меню',
            UA: '',
            POL: '',
            ENG: 'Menu',
            DE: ''
        },
        Marketing: {
            RU: 'Маркетинг',
            UA: '',
            POL: '',
            ENG: 'Marketing',
            DE: ''
        },
        Payments: {
            RU: 'Оплаты',
            UA: '',
            POL: '',
            ENG: 'Payments',
            DE: ''
        },
        SpecialOffers: {
            RU: 'Специальные предложения',
            UA: '',
            POL: '',
            ENG: 'Special offers',
            DE: ''
        },
        MoreDetails:{
            RU: 'Подробнее',
            UA: '',
            POL: '',
            ENG: 'More details',
            DE: ''
        },
        AddSpecialOffer: {
            RU: 'Добавить специальные предложение',
            UA: '',
            POL: '',
            ENG: 'Add special offer',
            DE: ''
        },
        EditSpecialOffer: {
            RU: 'Редактирование специального предложения',
            UA: '',
            POL: '',
            ENG: 'Edit special offer',
            DE: ''
        },
        AddCategory: {
            RU: 'Добавить категорию',
            UA: '',
            POL: '',
            ENG: 'Add category',
            DE: ''
        },
        EditCategory: {
            RU: 'Редактировать категорию',
            UA: '',
            POL: '',
            ENG: 'Edit category',
            DE: ''
        },
        AddModifierGroup: {
            RU: 'Добавить группу модификаторов',
            UA: '',
            POL: '',
            ENG: 'Add modifier group',
            DE: ''
        },
        EditModifierGroup: {
            RU: 'Редактировать группу модификаторов',
            UA: '',
            POL: '',
            ENG: 'Edit modifier group',
            DE: ''
        },
        EditModifier: {
            RU: 'Редактировать модификатор',
            UA: '',
            POL: '',
            ENG: 'Edit modifier',
            DE: ''
        },
        BasicSettings: {
            RU: 'Основные',
            UA: '',
            POL: '',
            ENG: 'Main',
            DE: ''
        },
        BasicSettingsDescription: {
            RU: 'Доставка, текстовый банер, сообщение после заказа, описание ресторана, контакты службы поддержки',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        CustomerBase: {
            RU: 'Клиентская база',
            UA: '',
            POL: '',
            ENG: 'Customer base',
            DE: ''
        },
        DownloadMobileApplicationWidget: {
            RU: 'Виджет "Скачать мобильное приложение"',
            UA: '',
            POL: '',
            ENG: 'Download mobile application widget',
            DE: ''
        },
        LoyaltyProgram: {
            RU: 'Программа лояльности',
            UA: '',
            POL: '',
            ENG: 'Loyalty program',
            DE: ''
        },
        PushNotifications: {
            RU: 'Пуш уведомления',
            UA: '',
            POL: '',
            ENG: 'Push notifications',
            DE: ''
        },
        PartnerFinancialReport: {
            RU: 'Финансовый отчет по партнеру',
            UA: '',
            POL: '',
            ENG: 'Partner financial report',
            DE: ''
        },
        EditRestaurantMenu: {
            RU: 'Редактировать меню ресторана',
            UA: '',
            POL: '',
            ENG: 'Edit restaurant menu',
            DE: ''
        },
        FinancialReport: {
            RU: 'Финансовый отчет',
            UA: '',
            POL: '',
            ENG: 'Financial report',
            DE: ''
        },
        SizeName: {
            RU: 'Название размера',
            UA: '',
            POL: '',
            ENG: 'Size name',
            DE: ''
        },
        Weight: {
            RU: 'Вес',
            UA: '',
            POL: '',
            ENG: 'Weight',
            DE: ''
        },
        Quantity: {
            RU: 'Количество',
            UA: '',
            POL: '',
            ENG: 'Quantity',
            DE: ''
        },
        MinimumNumberOfOptionsSelected: {
            RU: 'Минимальное количество выбранных вариантов',
            UA: '',
            POL: '',
            ENG: 'Minimum number of options selected',
            DE: ''
        },
        MaximumNumberOfOptionsSelected: {
            RU: 'Максимальное количество выбранных вариантов',
            UA: '',
            POL: '',
            ENG: 'Maximum number of options selected',
            DE: ''
        },
        ModifierName: {
            RU: 'Название модификатора',
            UA: '',
            POL: '',
            ENG: 'Modifier name',
            DE: ''
        },
        DeliveryActive: {
            RU: 'Доставка активна',
            UA: '',
            POL: '',
            ENG: 'Delivery is active',
            DE: ''
        },
        DeliveryActiveDescribeText: {
            RU: 'Регулярное отключение доставок значительно снижает лояльность постоянных клиентов.',
            UA: '',
            POL: '',
            ENG: 'Regular disconnection of deliveries significantly reduces the loyalty of regular customers.',
            DE: ''
        },
        TextBanner: {
            RU: 'Текстовый баннер',
            UA: '',
            POL: '',
            ENG: 'Text banner',
            DE: ''
        },
        TextBannerDescribeText: {
            RU: 'Информируйте ваших клиентов об изменениях в условиях заказа.',
            UA: '',
            POL: '',
            ENG: 'Inform your customers about changes in the order conditions.',
            DE: ''
        },
        MessageAfterOrder: {
            RU: 'Сообщение клиентам, после оформления заказа',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        MessageAfterOrderDescribeText: {
            RU: 'Опишите пользователю, когда будет принят его заказ: ему перезвонят, или он получит СМС-оповещение?',
            UA: '',
            POL: '',
            ENG: 'Describe to the user when his order will be accepted: will they call him back, or will he receive an SMS notification?',
            DE: ''
        },
        RestaurantDescription: {
            RU: 'Добавить описание ресторана',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        RestaurantDescriptionDescribeText: {
            RU: 'Опишите пользователю, свой ресторан',
            UA: '',
            POL: '',
            ENG: 'Describe your restaurant to the user',
            DE: ''
        },
        SupportPhoneNumber: {
            RU: 'Номер телефона службы поддержки ресторана',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        SupportPhoneNumberDescribeText: {
            RU: 'Иногда у клиентов возникают вопросы и они хотят связаться с рестораном по телефону.',
            UA: '',
            POL: '',
            ENG: 'Sometimes customers have questions and want to contact the retailer by phone.',
            DE: ''
        },
        PickupOrders: {
            RU: 'Самовывоз',
            UA: '',
            POL: '',
            ENG: 'Pickup orders',
            DE: ''
        },
        PickupOrdersDescribeText: {
            RU: 'При самовывозе не добавляется стоимость доставки и нет ограничений на минимальный заказ.',
            UA: '',
            POL: '',
            ENG: 'With self-pickup, no shipping costs are added and there is no minimum order limit.',
            DE: ''
        },
        CourierOrders: {
            RU: 'Доставка курьером',
            UA: '',
            POL: '',
            ENG: 'Courier orders',
            DE: ''
        },
        CourierOrdersDescribeText: {
            RU: 'Снимите галку, если хотите принимать заказы только на самовывоз.',
            UA: '',
            POL: '',
            ENG: 'Uncheck the box if you want to accept orders for pickup only.',
            DE: ''
        },
        CashPayment: {
            RU: 'Оплата наличными при получении заказа',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        CashPaymentDescribeText: {
            RU: 'Отключение данной функции снижает количество заказов.',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        CardPayment: {
            RU: 'Оплата картой при получении заказа',
            UA: '',
            POL: '',
            ENG: 'Payment by card upon receipt of the order',
            DE: ''
        },
        CardPaymentDescribeText: {
            RU: 'Узнать условия подключения дополнительных способов оплаты можно у нашего менеджера.',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        TelegramTransfer: {
            RU: 'Передача заказов в Telegram',
            UA: '',
            POL: '',
            ENG: 'Transferring orders to Telegram',
            DE: ''
        },
        TelegramTransferDescribeText: {
            RU: 'Для работы данного способа передачи создайте telegram чат, добавьте в него робота @gastrosoft_bot и отправьте сообщение "@gastrosoft_bot /start"',
            UA: '',
            POL: '',
            ENG: 'For this transmission method to work, please create a telegram chat, add the @gastrosoft_bot robot to it and send the message "@gastrosoft_bot / start"',
            DE: ''
        },
        EmailTransfer: {
            RU: 'Передача заказов по Email',
            UA: '',
            POL: '',
            ENG: 'Sending orders by Email',
            DE: ''
        },
        EmailTransferDescribeText: {
            RU: 'Мгновенное оповещение о новых заказах на указанный e-mail адрес',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        47: {
            RU: 'Вы получите уведомление, когда наш оператор его примет.',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        HomePageText: {
            RU: 'Для начала работы выбирите один из пунктов в меню слева',
            UA: '',
            POL: '',
            ENG: 'To get started, select one of the items in the menu on the left',
            DE: ''
        },
        Download: {
            RU: 'Скачать',
            UA: '',
            POL: '',
            ENG: 'Download',
            DE: ''
        },
        MinOrder: {
            RU: 'Мин. заказ (BYN)',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        DeliveryFee: {
            RU: 'Стоимость доставки (BYN)',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        FreeOrderStartFrom: {
            RU: 'Бесплатная доставка при заказе от (BYN)',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        },
        Header: {
            RU: 'Заголовок',
            UA: '',
            POL: '',
            ENG: '',
            DE: ''
        }
    }
}