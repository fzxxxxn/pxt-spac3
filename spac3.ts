/**
 * Use VARIABLE.min=number and VARIABLE.max=number
 * to specify a range on a parameter. Drag the foo
 * block and try to change the value!
 */

//% color="#FFAB19"

namespace spac3 {
    //% block

    export function group() {

    }
    //% block


    export function line(block: number) {

    }


    //% block="from%p3=minecraftCreatePosition|to %p4=minecraftCreatePosition|move x:%x|y:%y|z:%z"
    //% inlineInputMode=external
    export function move1(p3: Position, p4: Position, x: number, y: number, z: number) {
        const p5 = positions.add(pos(x, y, z), p3)
        blocks.clone(
            p3,
            p4,
            p5,
            CloneMask.Replace,
            CloneMode.Move
        );
    }
    //% block="from%p0=minecraftCreatePosition|to %p1=minecraftCreatePosition|moveto %p2=minecraftCreatePosition||"
    //% inlineInputMode=external
    export function moveto(p0: Position, p1: Position, p2: Position) {
        moveAll(p0,p1,p2);
    }
    //% block="from%p0=minecraftCreateWorldPosition to %p1=minecraftCreateWorldPosition|moveto %p2=minecraftCreateWorldPosition||"
    //% inlineInputMode=external    
    export function moveTrue(p0: Position, p1: Position, p2: Position) {
        moveAll(p0,p1,p2);
        
    }
    export function moveAll(p0: Position, p1: Position, p2: Position){
         blocks.clone(
            p0,
            p1,
            p2,
            CloneMask.Replace,
            CloneMode.Move);
    }
    export function calcuNewpos(p0: Position, p1: Position ){}
}
