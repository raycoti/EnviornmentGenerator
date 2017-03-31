# Enviornment Generator
**A React application for creating levels for games that utilize a coordinate system. You can set the grid size and properties appropritate for your game**

# Table of Contents
| [Overview](#Overview) | 
[Set up](#scripts2) | 
[React Components](#react) | 
[Models](#models) |

<a name = "Overview"/>

# Overview

**Current functionality**

Out of the box this application allows users to create a level with types : 
## BLOCK TYPES 
None | Rock | Grass | Water | Lava | Goal | Start | Key | Lock | Enemy | Move |
---------|----------|---------|---------|----------|---------|----------|---------|---------|----------|---------|

As the user selects 

# Front End
## Redux Reducers and React Containers/Components  

### Blocks

#### Components
**Block-component**: 

  Each square on the grid is a block component. This component has an id associated with it's x,y position on the grid which is used to change the CSS class of the table element based on it's game-type-property type.
**BlockSelect-component**:
  This is the component that contains the block types, updating the array terrainTypes will add potential game properties to your game.

**Block Container**:  
  This is a container for the block selector, keeps track of what block is selected and the properties that are added to that block.


 **grid-component**: 

  This creates a table where each square is a block-component.

 **grid-Gridcontainer**: 

  This is a smart component that handles the creation of game elements based on user selection. 

###Action Creators



Each block in the grid represents a game element at that coordinate, you can edit the properties array to give properties suitable for your game. You can edit the grid size