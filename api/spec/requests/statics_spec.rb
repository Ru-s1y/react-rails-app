require 'rails_helper'

describe 'root checking' do
  it 'ルートへの接続確認' do
    get '/'
    expect(response.status).to eq(200)
  end
end