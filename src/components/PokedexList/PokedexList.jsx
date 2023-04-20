import './PokedexList.css';
import { useState } from "react";
import axios from 'axios';

export default function PokedexList({user, setUser}) {
    return (
        <>
        <div class="table-container">
          <table>
            <thead>
              <th style={{visibility:"hidden"}}>ssssssssss</th>
              <th style={{paddingLeft: "3%"}}> Pokemon</th>
              <th style={{visibility:"hidden"}}>sssssss</th>
    
            </thead>
            <tbody>
              <tr>
                <td id="zapdos-sprite-table"></td>
                <td className="pokemon-name-table">Zapdos</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="milotic-sprite-table"></td>
                <td>Milotic</td> <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="gardevoir-sprite-table"></td>
                <td className="pokemon-name-table">Gardevoir</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="salamence-sprite-table"></td>
                <td className="pokemon-name-table">Salamence</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="blissey-sprite-table"></td>
                <td className="pokemon-name-table">Blissey</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="zapdos-sprite-table"></td>
                <td className="pokemon-name-table">Zapdos</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="milotic-sprite-table"></td>
                <td>Milotic</td> <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="gardevoir-sprite-table"></td>
                <td className="pokemon-name-table">Gardevoir</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="salamence-sprite-table"></td>
                <td className="pokemon-name-table">Salamence</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
              <tr>
                <td id="blissey-sprite-table"></td>
                <td className="pokemon-name-table">Blissey</td>
                <td>
                  <button className="button-table"> Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
            </tbody>
          </table> 
        </div>
        </>
    )
}