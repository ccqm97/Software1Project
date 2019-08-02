/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteria.repositories;

import com.ferreteria.ferreteria.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;

/**
 *
 * @author oscar
 */

public interface PersonaRepositorio extends Repository<Persona, Integer> {
    
       
    List<Persona> findAll();
    Persona findOne(long id);
    Persona save(Persona p);
    Persona edit(Persona p);
    Persona delete(long id);
}
