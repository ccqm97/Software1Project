/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.controlador;

import com.ferreteria.ferreteria.Persona;
import com.ferreteria.services.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author oscar
 */

@CrossOrigin(origins = "http://localhost:4200/home", maxAge = 3600)
@RestController
@RequestMapping({"/personas"})

public class Controlador {
    
    @Autowired
    PersonaService personaService;
    
    @GetMapping
    public List<Persona> listar(){
        return personaService.list();
    }     
}
