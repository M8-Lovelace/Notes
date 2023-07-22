package org.formacion;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestLambdas {

  private LambdasFactory fact = new LambdasFactory();

  @Test
  public void test_sumador () {
    assertEquals(5, fact.obtenSumador().opera(2, 3));
  }

  @Test
  public void test_devuelve5 () {
    assertEquals(5, fact.devuelve5().valor());
  }

  @Test
  public void test_inicializador() {
    String[] array = new String[4];

    fact.obtenInicializador().inicializa(array, "A");

    assertArrayEquals(array, new String[] {"A","A","A","A"});
  }
}