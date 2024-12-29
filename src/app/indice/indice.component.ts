import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Contenido',
    children: [
      {name: 'Sobre Angular',},
      {name: 'Instalación',},
      {name: 'Primero pasos',},
      {name: 'Nuestra primera web con Angular',},
      {name: 'Conclusiones',}
    ],
  },
];

/**
 * @title Tree with flat nodes (childrenAccessor)
 */
@Component({
  selector: 'app-indice',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './indice.component.html',
  styleUrl: './indice.component.css'
})
export class IndiceComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
