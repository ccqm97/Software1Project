/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.serviceImp;

import com.ferreteriaUniversal.ferreteria.model.Item;
import com.ferreteriaUniversal.ferreteria.repositorio.ItemRepositorio;
import com.ferreteriaUniversal.ferreteria.service.ItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepositorio itemRepositorio;
    
    
    @Override
    public List<Item> list() {
        return itemRepositorio.findAll();
    }

    @Override
    public Item listId(long id) {
        return itemRepositorio.findOne(id);
    }

    @Override
    public Item add(Item item) {
        return itemRepositorio.save(item);
    }

    @Override
    public Item edit(Item item) {
        return itemRepositorio.save(item);
    }

    @Override
    public Item delete(long id) {
        Item item =itemRepositorio.findOne(id);
        if (item != null) {
            itemRepositorio.delete(item);
        }
        return item;   
    }
    
}
