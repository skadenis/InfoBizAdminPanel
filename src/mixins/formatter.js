import Config from "@/config";

export default {
    methods: {
        formatter: function (param) {
            return (new Intl.NumberFormat(Config.currency.locales, {
                style: Config.currency.style,
                currency: Config.currency.currency,
            })).format(param);
        },
        formatterSignificantDigits: function (param) {
            return (new Intl.NumberFormat(Config.currency.locales, {
                style: Config.currency.style,
                currency: Config.currency.currency,
                maximumSignificantDigits: 4
            })).format(param);
        }
    }
}