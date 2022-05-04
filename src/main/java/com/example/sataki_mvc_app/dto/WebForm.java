package com.example.sataki_mvc_app.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@Entity
@Table(name = "web_worm")
public class WebForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(columnDefinition = "TEXT")
    private String textComment;

    @NotBlank(message = "Введите имя")
    private String name;

    @Column(name = "name_company")
    @NotBlank(message = "Введите название компании")
    private String nameCompany;

    @Pattern(regexp = "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$", message = "Введите коректный номер телефона")
    @NotBlank(message = "Введите номер телефона")
    private String number;

    @NotBlank(message = "Введите email")
    @Email
    private String email;

    @Override
    public String toString() {
        return "Имя: " + name + "\nНазвание компании: " + nameCompany + "\nНомер телефона: " + number
                + "\nemail: " + email + "\nКомментарий: " + textComment;
    }
}
