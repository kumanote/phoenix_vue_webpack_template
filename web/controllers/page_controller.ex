defmodule PhoenixVueWebpackTemplate.PageController do
  use PhoenixVueWebpackTemplate.Web, :controller

  def index(conn, _params) do
    html(conn, File.read!("priv/static/index.html"))
  end
end
