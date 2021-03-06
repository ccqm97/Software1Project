package com.ferreteriaUniversal.ferreteria.controlador;

import com.ferreteriaUniversal.ferreteria.model.ItemProducto;
import com.ferreteriaUniversal.ferreteria.service.ItemProductoService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/itemProducto"})
public class ControladorItemProducto {
	
	@Autowired
	private ItemProductoService itemProductoService;
	
	 @GetMapping
    public List<ItemProducto> listar(){
       return itemProductoService.list();
    }

	@PostMapping
	public ItemProducto agregar(@RequestBody ItemProducto itemProducto) {
		return itemProductoService.add(itemProducto);
	}
	
	 @GetMapping(path = {"/{codigoProducto}"})
    public List<ItemProducto> listarId(@PathVariable("codigoProducto") String codigo){
       return itemProductoService.listCode(codigo);
    }

}
