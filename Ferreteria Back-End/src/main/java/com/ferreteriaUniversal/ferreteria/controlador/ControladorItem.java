/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ferreteriaUniversal.ferreteria.controlador;

import com.ferreteriaUniversal.ferreteria.model.Item;
import com.ferreteriaUniversal.ferreteria.service.ItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Viviana
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/itemsFactura"})
public class ControladorItem {
    
    @Autowired
    ItemService itemService;
    
     @GetMapping
    public List<Item> listar(){
       return itemService.list();
    }
  
    @PostMapping
    public Item agregar(@RequestBody Item item){
        return itemService.add(item);
    }
    
     @GetMapping(path = {"/{idItem}"})
    public Item listarId(@PathVariable("idItem") long idItem){
       return itemService.listId(idItem);
    }
    
   // @PutMapping(path ={"/{idFactura}"})
    //public Item editar(@RequestBody Item item, @PathVariable("idFactura") long idItem){
       
    //}
    
    @DeleteMapping(path = {"/{idFactura}"})
    public Item delete(@PathVariable("idFactura") long idFactura){
        return itemService.delete(idFactura);
    }
    
}
