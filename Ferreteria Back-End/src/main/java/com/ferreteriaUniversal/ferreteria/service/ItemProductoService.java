package com.ferreteriaUniversal.ferreteria.service;

import java.util.List;

import com.ferreteriaUniversal.ferreteria.model.ItemProducto;

public interface ItemProductoService {
	List<ItemProducto> list();
	ItemProducto listID(long id);
	ItemProducto add(ItemProducto itemProducto);
	ItemProducto edit(ItemProducto itemProducto);
	ItemProducto delete(long id);

}
