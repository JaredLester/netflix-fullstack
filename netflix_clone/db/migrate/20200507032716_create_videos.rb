class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      
    t.string :title, null: false
    t.string :description, null: false
    t.integer :year, null: false 
    t.timestamps
    end
    
  end
end
