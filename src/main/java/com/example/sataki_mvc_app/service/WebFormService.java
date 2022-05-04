package com.example.sataki_mvc_app.service;

import com.example.sataki_mvc_app.dto.WebForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebFormService {

    WebFormRepository webFormRepository;
    MailService mailService;

    @Autowired
    public WebFormService(WebFormRepository webFormRepository, MailService mailService) {
        this.webFormRepository = webFormRepository;
        this.mailService = mailService;
    }

    public List<WebForm> getWebFormData() {
        return webFormRepository.findAll();
    }

    public void saveWebForm(WebForm webForm) {
        webFormRepository.save(webForm);
        mailService.send("Добавлена запись через форму sataki.ru", webForm.toString());
    }
}
