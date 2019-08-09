/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.repositorio;

import com.ferreteriaUniversal.ferreteria.model.Item;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Viviana
 */
public interface ItemRepositorio extends Repository <Item , Long> {
    
    List<Item> findAll();
    Item findOne(long id);
    Item save(Item item);
    void delete(Item item);
}
