/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.service;

import com.ferreteriaUniversal.ferreteria.model.Item;
import java.util.List;

/**
 *
 * @author Viviana
 */
public interface ItemService {
    
    List<Item> list();    
    Item listId(long id);
    Item add(Item item);
    Item edit(Item item);
    Item delete(long id);
}
