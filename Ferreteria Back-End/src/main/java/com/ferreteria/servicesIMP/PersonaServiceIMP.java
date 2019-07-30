/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.servicesIMP;

import com.ferreteria.ferreteria.Persona;
import com.ferreteria.repositories.PersonaRepositorio;
import com.ferreteria.services.PersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author oscar
 */

@Service
public class PersonaServiceIMP implements PersonaService{
    @Autowired
    private PersonaRepositorio pr;
    
    @Override
    public List<Persona> list() {
        return pr.findAll();
    }

    @Override
    public Persona listId(long id) {
        return pr.findOne(id);
    }

    @Override
    public Persona add(Persona producto) {
        return pr.save(producto);
    }

    @Override
    public Persona edit(Persona producto) {
        return pr.edit(producto);
    }

    @Override
    public Persona delete(long id) {
        return pr.delete(id);
    }
}
