#!/usr/bin/python
# -*- coding: utf-8 -*-

# Programa realizado por docentes de la FING - UDELAR

from __future__ import division
import numpy as np
from fractions import Fraction
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider

font = {
    'family': 'Arial',
    'size': 22
}

plt.rc('font', **font)

def update(val):
    # Grafico x^2 entre 1 y 2
    ax0.cla()    
    x = np.arange(0,2.1,0.01)
    ax0.plot(x,x**2,'b',label='$x^2$',linewidth=2)
    ax0.axhline(3,0,b+0.1,color='red',linewidth=2)
    ax0.grid(True)
    n = int(step_slider.val) - 1
    estimation = estimations[n]
    ax0.plot(estimation,estimation**2,'go',linewidth=2, markersize=5)
    estimation_str = '$%s$' % Fraction(estimation)
    estimated_value_str = '%1.3f' % (estimation**2)
    x_min,x_max,y_min,y_max = ax0.axis()
    ax0.text(estimation,y_min,estimation_str,color='g')
    ax0.text(x_min,estimation**2,estimated_value_str,color='g')
    ax0.axhline(estimation**2,0,estimation/x_max,color='g',linestyle='dashed',linewidth=2)
    ax0.axvline(estimation,0,estimation**2/y_max,color='g',linestyle='dashed',linewidth=2)
    ax0.legend()

def onpress(event):
    if event.key == 'right':
        step_slider.set_val(np.min((step_slider.val + 1,num_steps)))
    elif event.key == 'left':
        step_slider.set_val(np.max((step_slider.val - 1,1)))
    
# Extremos del intervalo con el que empiezo
a = 1
b = 2

# Error debe ser menor que tolerancia tol
tol = 1/128

# Calculo cantidad de iteraciones para tener tolerancia menor a tol
num_steps = np.ceil(np.log2(1/tol)).astype('int')

# Guardo estimaciones para graficar despues
estimations = np.zeros(num_steps)

fig, (ax0, ax1) = plt.subplots(2, 1, gridspec_kw={ 'height_ratios': [20, 1] })

for n in range(num_steps):
    midpoint = (a+b)/2
    print('Paso %d - Estimación: %s - Error menor a %s' %(n+1,Fraction(midpoint),Fraction(1/(2**(n+1)))))
    if midpoint**2 >3:
        b = midpoint
    else:
        a = midpoint
    estimations[n] = midpoint

axcolor = 'lightgoldenrodyellow'
step_slider = Slider(ax1, 'Paso', 1, num_steps, valinit=1, valstep=1,valfmt='%d')

update(step_slider.val)

step_slider.on_changed(update)
cid = fig.canvas.mpl_connect('key_press_event', onpress)

plt.show()
