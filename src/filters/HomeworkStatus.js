import moment from "moment";

export default function(value) {
    switch (value){
        case 'In_progress':
            return 'На проверке'
            break;
        case 'Failed':
            return 'Отклонено'
            break;
        case 'Complete':
            return 'Принято'
            break;
    }
}