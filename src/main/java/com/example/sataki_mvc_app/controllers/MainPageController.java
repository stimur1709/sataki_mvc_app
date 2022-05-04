package com.example.sataki_mvc_app.controllers;

import com.example.sataki_mvc_app.dto.WebForm;
import com.example.sataki_mvc_app.service.WebFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/sataki")
public class MainPageController {

    private final WebFormService webFormService;

    @Autowired
    public MainPageController(WebFormService webFormService) {
        this.webFormService = webFormService;
    }

    @GetMapping("/main")
    public String mainPage(Model model) {
        model.addAttribute("webForm", new WebForm());
        model.addAttribute("list", webFormService.getWebFormData());
        return "index";
    }

    @PostMapping("/save")
    public String saveWebForm(@Valid WebForm webForm, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            model.addAttribute("webForm", webForm);
            model.addAttribute("list", webFormService.getWebFormData());
            return "index";
        } else {
            webFormService.saveWebForm(webForm);
            return "redirect:/sataki/main";
        }
    }
}
