defmodule PhoenixVueWebpackTemplate.PageController do
  use PhoenixVueWebpackTemplate.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
