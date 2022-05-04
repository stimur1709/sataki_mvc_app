package com.example.sataki_mvc_app.service;

import com.example.sataki_mvc_app.dto.WebForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebFormRepository extends JpaRepository<WebForm, Integer> {
}
