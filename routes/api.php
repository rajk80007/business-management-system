<?php

use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\InvoiceController;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Clients API routes
Route::get('clients', [ClientController::class, 'index']);
Route::get('clients/{id}', [ClientController::class, 'show']);
Route::post('clients', [ClientController::class, 'store']);
Route::put('clients/{id}', [ClientController::class, 'update']);
Route::delete('clients/{id}', [ClientController::class, 'destroy']);

// Projects API routes
Route::get('projects', [ProjectController::class, 'index']);
Route::get('projects/{id}', [ProjectController::class, 'show']);
Route::post('projects', [ProjectController::class, 'store']);
Route::put('projects/{id}', [ProjectController::class, 'update']);
Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

// Invoices API routes
Route::get('invoices', [InvoiceController::class, 'index']);
Route::get('invoices/{id}', [InvoiceController::class, 'show']);
Route::post('invoices', [InvoiceController::class, 'store']);
Route::put('invoices/{id}', [InvoiceController::class, 'update']);
Route::delete('invoices/{id}', [InvoiceController::class, 'destroy']);
