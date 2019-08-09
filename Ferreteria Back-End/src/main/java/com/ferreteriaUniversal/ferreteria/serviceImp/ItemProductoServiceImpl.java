package com.ferreteriaUniversal.ferreteria.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ferreteriaUniversal.ferreteria.model.ItemProducto;
import com.ferreteriaUniversal.ferreteria.repositorio.ItemProductoRepositorio;
import com.ferreteriaUniversal.ferreteria.service.ItemProductoService;

@Service
public class ItemProductoServiceImpl implements ItemProductoService {
	@Autowired
	private ItemProductoRepositorio itemProductoRepositorio;

	@Override
	public List<ItemProducto> list() {
		return itemProductoRepositorio.findAll();
	}

	@Override
	public ItemProducto listID(int id) {
		return itemProductoRepositorio.findOne(id);
	}

	@Override
	public ItemProducto add(ItemProducto itemProducto) {
		return itemProductoRepositorio.save(itemProducto);
	}

	@Override
	public ItemProducto edit(ItemProducto itemProducto) {
		return itemProductoRepositorio.save(itemProducto);
	}

	@Override
	public ItemProducto delete(int id) {
		ItemProducto itemProducto = itemProductoRepositorio.findOne(id);
		if (itemProducto!=null) {
			itemProductoRepositorio.delete(itemProducto);
		}
		return itemProducto;
	}

}
