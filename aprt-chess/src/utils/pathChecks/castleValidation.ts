import { useBoard } from "../../contexts/BoardContext";
import { Piece } from "../../types/global";
import { blackRook, whiteRook } from "../ChessPieces";


export function validateCastle(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    boardState:Piece[][]
   
):boolean{
   

    if(fromX==4 && toX==6 && fromY==7 && toY == 7 ){
        console.log("castling attempted on the right");
        console.log(boardState[7][5],boardState[7][6]);
        if(boardState[7][5]==""&&boardState[7][6] =="" && boardState[7][7] ==whiteRook||boardState[7][7] ==blackRook){
            console.log("valid castle move")
            const existingBoardState:Piece[][] = [...boardState];
            existingBoardState[7][5] = boardState[7][7]==blackRook? blackRook:whiteRook;
            existingBoardState[7][7] = "";
            
            //TODO: Find a way to setBoardState(existingBoardState) at this point
            
            return true;
        }
    }
    else if(fromX==4 && toX==2 && fromY==7 && toY == 7 ){
        console.log("castling attempted on the left");
        
        if(boardState[7][3]==""&&boardState[7][2] =="" &&boardState[7][1] ==""&& boardState[7][0] ==whiteRook||boardState[7][0] ==blackRook){
            console.log("valid castle move")
            
            const existingBoardState:Piece[][] = [...boardState];
            existingBoardState[7][3] = boardState[7][0]== blackRook? blackRook:whiteRook;
            existingBoardState[7][0] = "";
            
            //TODO: Find a way to setBoardState(existingBoardState) at this point
            
            return true;
        }
    }
    return false;

}