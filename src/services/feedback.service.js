import emailjs from '@emailjs/browser';

export default class FeedbackService {
    static sendFeedback (form) {
        return emailjs.sendForm('service_7f4hm11', 'template_kogi929', form, 'PA1zlzQuBf6zkrr-p')
    }
}