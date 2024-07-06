#! /usr/bin/env node
//welcome msg
//hero information
//enemy information
//option (attack, health_option)
import inquirer from "inquirer";
//-----------------------------------Hero variables------------------------------------
let hero_name = "";
let hero_health = 100;
let hero_attacking_power = 100;
let num_health_potion = 2;
let health_increase = 50;
//-----------------------------------Enemies variables------------------------------------
let enemies = ["Zoombie", "Drucula", "Mummy", "Vempire"];
let enemy_healt = 100;
let enemy_attacking_power = 100;
//-----------------------------------Random variables------------------------------------
let random_hero_attacking_power = Math.floor(Math.random() * hero_attacking_power + 1);
let random_enemy_attacking_power = Math.floor(Math.random() * enemy_attacking_power + 1);
let random_index = Math.floor(Math.random() * 4);
let random_enemy = enemies[random_index];
//-----------------------------------welcome msg------------------------------------
console.log("\n\t--------- Welcome to Adventure Game ---------");
//-----------------------------------name --------------------------------
let name = await inquirer.prompt({
    name: "question",
    type: "input",
    message: "What is your name?"
});
hero_name = name.question;
//-----------------------------------information--------------------------------
information();
//-----------------------------------Do-while--------------------------------
while (enemy_healt > 0) {
    //-----------------------------------Options--------------------------------
    console.log("\n---------------------------------------------------");
    let options = await inquirer.prompt({
        name: "question",
        type: "list",
        message: "Please select one",
        choices: ["1. Attack", "2. health_potion"]
    });
    if (options.question === "1. Attack") {
        enemy_healt = enemy_healt - random_hero_attacking_power;
        hero_health = hero_health - random_enemy_attacking_power;
        information();
        if (enemy_healt <= 0) {
            console.log("\n---------------------------------------------------");
            console.log("\t\tyou have killed enemy");
            break;
        }
        else if (hero_health <= 0) {
            console.log("\n---------------------------------------------------");
            console.log("Hero is dead now");
            break;
        }
    }
    else if (options.question === "2. health_potion") {
        if (num_health_potion > 0) {
            hero_health = hero_health + health_increase;
            --num_health_potion;
            information();
        }
        else {
            console.log("No healt potion availabe");
        }
    }
}
console.log("\n\t\tThank you for play this game");
function information() {
    if (hero_health < 0) {
        hero_health = 0;
    }
    if (enemy_healt < 0) {
        enemy_healt = 0;
    }
    //-----------------------------------hero information--------------------------------
    console.log("\n\t\t Hero Information");
    console.log("---------------------------------------------------");
    console.log(`Hero name: ${hero_name},
     your healt is ${hero_health},
     your maximum attacking power is ${hero_attacking_power}`);
    //-----------------------------------Enemy information--------------------------------
    console.log("\n\t\t Enemy Information");
    console.log("---------------------------------------------------");
    console.log(`Enemy name: ${random_enemy},
     Enemy healt is ${enemy_healt},
     Enemy maximum attacking power is ${enemy_attacking_power}`);
}
