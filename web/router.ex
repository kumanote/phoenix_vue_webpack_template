defmodule PhoenixVueWebpackTemplate.Router do
  use PhoenixVueWebpackTemplate.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PhoenixVueWebpackTemplate do
    pipe_through :api

    get "/users", UserController, :index
    get "/users/:id", UserController, :show
    post "/users", UserController, :create
  end

  scope "/", PhoenixVueWebpackTemplate do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/*path", PageController, :index
  end
end
